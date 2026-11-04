$ErrorActionPreference = "Continue"
$requiredMissing = $false

function Test-Tool {
    param(
        [string]$Name,
        [string]$Command,
        [switch]$Required
    )

    $tool = Get-Command $Command -ErrorAction SilentlyContinue
    if ($tool) {
        Write-Host "[OK]       $Name ($($tool.Source))" -ForegroundColor Green
    }
    elseif ($Required) {
        Write-Host "[MISSING] $Name (required)" -ForegroundColor Red
        $script:requiredMissing = $true
    }
    else {
        Write-Host "[OPTIONAL] $Name (not installed)" -ForegroundColor Yellow
    }
}

$root = Split-Path -Parent $PSScriptRoot
Push-Location $root
try {
    Test-Tool "Node.js" "node" -Required
    Test-Tool "Corepack" "corepack" -Required
    Test-Tool "Git" "git" -Required
    Test-Tool "Docker" "docker"
    Test-Tool "Java" "java"
    Test-Tool "Gradle" "gradle"
    Test-Tool "Rust" "rustc"
    Test-Tool "Cargo" "cargo"

    if (Get-Command node -ErrorAction SilentlyContinue) {
        node --version
        $nodeVersion = [version](node -p "process.versions.node")
        if ($nodeVersion -lt [version]"22.12.0") {
            Write-Host "[MISSING] Node.js 22.12 or newer is required (found $nodeVersion)." -ForegroundColor Red
            $requiredMissing = $true
        }
    }
    if (Test-Path "node_modules") {
        Write-Host "[OK]       Workspace dependencies installed" -ForegroundColor Green
    }
    else {
        Write-Host "[INFO]     Run .\scripts\setup.ps1 to install workspace dependencies" -ForegroundColor Cyan
    }
}
finally {
    Pop-Location
}

if ($requiredMissing) {
    exit 1
}
