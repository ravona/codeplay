#!/bin/bash

set -e

# Function to handle errors
handle_error() {
    echo "Error: $1" >&2
    exit 1
}

# Dev dependencies configuration
DEV_DEPENDENCIES=(
    "@nx/node @nx/react @nx/express @nx/vite @nx/webpack @nx/next"                   
    "typescript @types/express @types/cors @types/pg"
    "@graphql-typed-document-node/core"
    "@tanstack/react-query-devtools"
    "sass"
    "prettier"
)

# Prod dependencies configuration
PROD_DEPENDENCIES=(
    "@apollo/client"
    "@apollo/server"
    "express"
    "cors"
    "body-parser"
    "graphql"
    "pg"
    "dotenv"
    "@tanstack/react-query"
    "mobx"
    "mobx-react-lite"
    "yup"
    "react-hook-form"
    "@hookform/resolvers"
    "i18next"
    "react-i18next"
    "i18next-http-backend"
    "i18next-browser-languagedetector"
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