@echo off
echo.
echo ==================================
echo    SRL-LOGIX Stack Auth Setup
echo ==================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo    ERROR: Node.js is not installed.
    echo    Please install Node.js first from https://nodejs.org/
    echo.
    pause
    exit /b
)

echo    SUCCESS: Node.js found
node --version
echo.

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo    ERROR: npm is not installed.
    echo    Please install npm first from https://www.npmjs.com/
    echo.
    pause
    exit /b
)

echo    SUCCESS: npm found
npm --version
echo.

REM Install dependencies
echo.
echo    Installing Stack Auth dependencies...
echo.
npm install
if %errorlevel% neq 0 (
    echo.
    echo    ERROR: Failed to install dependencies.
    echo    Please check the error messages above.
    echo.
    pause
    exit /b
)

echo    SUCCESS: Dependencies installed successfully!
echo.

REM Create .env file if it doesn't exist
if not exist .env (
    echo.
    echo    Creating .env file from template...
    copy .env.example .env >nul
    echo    SUCCESS: .env file created.
    echo    Please edit it with your Stack Auth configuration.
    echo.
) else (
    echo    SUCCESS: .env file already exists.
    echo.
)

echo.
echo ==================================
echo    Setup Complete!
echo ==================================
echo.
echo    Next steps:
echo    1. Edit .env file with your Stack Auth project ID
echo    2. Configure OAuth providers (Google, GitHub)
echo    3. Run: npm run dev
echo    4. Open: http://localhost:3000
echo.
echo    For detailed setup instructions, see: STACK_AUTH_SETUP.md
echo.
echo    Get your Stack Auth project ID from: https://app.stack-auth.com
echo.
echo    Need help? Check the troubleshooting section in STACK_AUTH_SETUP.md
echo.
echo.
pause
