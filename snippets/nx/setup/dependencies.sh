#!/bin/bash

set -e

# Function to handle errors
handle_error() {
    echo "Error: $1" >&2
    exit 1
}

# Dev dependencies configuration
DEV_DEPENDENCIES=(
    "@nx/node @nx/react @nx/next"                   
    "typescript @types/react @types/react-dom @types/pg"
    "@graphql-typed-document-node/core"
    "@tanstack/react-query-devtools"
    "sass"
    "prettier"
    "eslint"
    "eslint-config-next"
)

# Prod dependencies configuration
PROD_DEPENDENCIES=(
    "@apollo/client"
    "graphql"
    "pg"
    "dotenv"
    "@tanstack/react-query"
    "mobx"
    "mobx-react-lite"
    "yup"
    "react-hook-form"
    "@hookform/resolvers"
    "next-i18next"
)

# Function to install dependencies
install_dependencies() {
    local is_dev=$1
    local dependencies=("${@:2}")
    local install_cmd="pnpm add"
    
    if [ "$is_dev" = true ]; then
        install_cmd="$install_cmd -D"
    fi
    
    for dep in "${dependencies[@]}"; do
        echo "Installing $dep..."
        $install_cmd $dep || handle_error "Failed to install $dep"
    done
}

# Install dev dependencies
echo "Installing dev dependencies..."
install_dependencies true "${DEV_DEPENDENCIES[@]}"

# Install production dependencies
echo "Installing production dependencies..."
install_dependencies false "${PROD_DEPENDENCIES[@]}"

echo "Dependencies installed successfully!"