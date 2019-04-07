#!/bin/bash

echo "Setting up development environment"
cd deliverit-frontend 
echo "Installing front-end dependencies"
npm i
cd ../deliverit-backend
echo "Installing back-end dependencies"
npm i
cd ..
code .
echo "Packages installed"
