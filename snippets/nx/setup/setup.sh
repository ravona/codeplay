#!/bin/bash

set -e

MONOREPO_NAME="altrix"
APPS=("dg" "reed" "vox")

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
bash ./dependencies.sh || handle_error "Failed to install dependencies"

# Update Nx workspace after installing dependencies
echo "Resetting NX workspace"
reset_nx

# Generate shared libraries
echo "Generating shared libraries..."

echo "Generating shared-styles library..."
nx generate @nx/js:library shared-styles --bundler=vite --directory=libs/shared-styles --verbose || handle_error "Failed to generate shared-styles library"


echo "Generating shared-types library..."
nx generate @nx/js:library shared-types --bundler=vite --directory=libs/shared-types --verbose || handle_error "Failed to generate shared-types library"


echo "Generating shared-react library..."
nx generate @nx/react:library shared-react --bundler=vite --directory=libs/shared-react --verbose || handle_error "Failed to generate shared-react library"


echo "Generating shared-translations library..."
nx generate @nx/react:library shared-translations --bundler=vite --directory=libs/shared-translations || handle_error "Failed to generate shared-translations library"
reset_nx

# Generate applications and core libraries
for APP in "${APPS[@]}"; do
    echo "Generating applications and core library for ${APP}..."
    
    # Generate core library
    nx generate @nx/js:library core-${APP} --bundler=vite --directory=libs/core-${APP} || handle_error "Failed to generate core-${APP} library"
    

    # Generate client application
    nx generate @nx/react:application ${APP}-client --bundler=vite --directory=apps/react/${APP}-client || handle_error "Failed to generate ${APP}-client application"
    
    
    # Generate server application
    nx generate @nx/express:application ${APP}-server --frontendProject="${APP}-client" --directory=apps/${APP}-server || handle_error "Failed to generate ${APP}-server application"
    reset_nx
done

echo "NX monorepo setup completed successfully!"