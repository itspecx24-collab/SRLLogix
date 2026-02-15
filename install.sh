#!/bin/bash

# SRL-LOGIX Stack Auth Installation Script
# This script sets up Stack Auth for the SRL-LOGIX project

echo "🚀 SRL-LOGIX Stack Auth Setup"
echo "=================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ npm is not installed. Please install npm first."
    echo "Visit: https://www.npmjs.com/"
    exit 1
fi

echo "✅ npm found: $(npm --version)"

# Install dependencies
echo ""
echo "📦 Installing Stack Auth dependencies..."
npm install

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies. Please check the error messages above."
    exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    echo ""
    echo "📝 Creating .env file from template..."
    cp .env.example .env
    echo "✅ .env file created. Please edit it with your Stack Auth configuration."
else
    echo "✅ .env file already exists."
fi

# Instructions
echo ""
echo "🎯 Setup Complete!"
echo "=================================="
echo "Next steps:"
echo "1. Edit .env file with your Stack Auth project ID"
echo "2. Configure OAuth providers (Google, GitHub)"
echo "3. Run: npm run dev"
echo "4. Open: http://localhost:3000"
echo ""
echo "📚 For detailed setup instructions, see: STACK_AUTH_SETUP.md"
echo ""
echo "🔑 Get your Stack Auth project ID from: https://app.stack-auth.com"
echo ""
echo "🛠️ Need help? Check the troubleshooting section in STACK_AUTH_SETUP.md"
