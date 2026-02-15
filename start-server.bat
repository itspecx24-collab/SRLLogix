@echo off
echo Starting SRL-LOGIX Website Test Server...
echo.
echo Please choose your preferred method:
echo 1. Python HTTP Server (if Python is installed)
echo 2. PHP Built-in Server (if PHP is installed)
echo 3. Open index.html directly (limited functionality)
echo.
set /p choice="Enter your choice (1-3): "

if "%choice%"=="1" goto python
if "%choice%"=="2" goto php
if "%choice%"=="3" goto direct
goto invalid

:python
echo.
echo Starting Python HTTP Server...
python -c "import sys; print('Python 3 detected') if sys.version_info[0] >= 3 else print('Python 2 detected')" 2>nul
if errorlevel 1 (
    echo Python not found or not in PATH
    echo Please install Python from https://python.org
    pause
    exit
)
python -m http.server 8000
goto end

:php
echo.
echo Starting PHP Built-in Server...
php -v >nul 2>&1
if errorlevel 1 (
    echo PHP not found or not in PATH
    echo Please install PHP from https://php.net
    pause
    exit
)
php -S localhost:8000
goto end

:direct
echo.
echo Opening index.html directly...
echo Note: Some features may not work properly due to CORS restrictions
start "" "http://file:///c:/Users/xabis/CascadeProjects/windsurf-project-2/index.html"
goto end

:invalid
echo Invalid choice. Please run the script again.
pause

:end
echo.
echo Server stopped. Press any key to exit...
pause >nul
