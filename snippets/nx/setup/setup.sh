#!/bin/bash

set -e

MONOREPO_NAME="altrix"
APPS=("showcase" "binge" "reed" "four-eyed-ninja" "go-figure")

# Function to handle errors
handle_error() {
    echo "Error: $1" >&2
    exit 1
}

# Function to check if a command is available
check_command() {
    if ! command -v $1 &> /dev/null; then
        handle_error "$1 is not installed. Please install it and try again."
    fi
}

reset_nx() {
    echo "Reseting Nx cache..."
    nx reset || handle_error "Failed to reset Nx cache"
}

# Check for required commands
check_command pnpx
check_command pnpm
check_command nx

# Create a new nx workspace
echo "Creating new NX workspace..."
pnpx create-nx-workspace@latest ${MONOREPO_NAME} --preset=next --allPrompts || handle_error "Failed to create the new workspace"

# Navigate to the new workspace
cd ${MONOREPO_NAME} || handle_error "Failed to navigate to the new workspace"

# Install dependencies
echo "Installing dependencies..."
bash ../dependencies.sh || handle_error "Failed to install dependencies"

# Update Nx workspace after installing dependencies
echo "Resetting NX workspace"
reset_nx

# Generate shared libraries
echo "Generating shared libraries..."

# Generate shell application
echo "Generating shell application..."
nx generate @nx/next:application shell --directory=apps/shell || handle_error "Failed to generate shell application"

echo "Generating shared-styles library..."
nx generate @nx/js:library shared-styles --directory=libs/shared-styles --verbose || handle_error "Failed to generate shared-styles library"

echo "Generating shared-types library..."
nx generate @nx/js:library shared-types --directory=libs/shared-types --verbose || handle_error "Failed to generate shared-types library"

echo "Generating framework-agnostic shared-ui library..."
nx generate @nx/js:library shared-ui --directory=libs/shared-ui || handle_error "Failed to generate shared-ui library"

echo "Generating shared-translations library..."
nx generate @nx/js:library shared-translations --directory=libs/shared-translations || handle_error "Failed to generate shared-translations library"
reset_nx

# Generate applications and core libraries
for APP in "${APPS[@]}"; do
    echo "Generating application and core library for ${APP}..."
    
    # Generate core library
    nx generate @nx/js:library core-${APP} --directory=libs/core-${APP} || handle_error "Failed to generate core-${APP} library"
    
    # Generate Next.js application (includes both client and server capabilities)
    nx generate @nx/next:application ${APP} --directory=apps/next/${APP} || handle_error "Failed to generate ${APP} application"
    
    reset_nx
done

echo "NX monorepo setup completed successfully!"