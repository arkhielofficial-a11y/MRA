$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot

Push-Location $root
try {
    if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
        throw "Node.js 22.12+ is required. Install Node.js 24 LTS and retry."
    }

    $nodeVersion = [version](node -p "process.versions.node")
    if ($nodeVersion -lt [version]"22.12.0") {
        throw "Node.js 22.12+ is required; found $nodeVersion."
    }

    if (-not (Get-Command corepack -ErrorAction SilentlyContinue)) {
        throw "Corepack is required to activate the repository-pinned pnpm version."
    }

    Write-Host "Installing workspace dependencies with pnpm..."
    corepack pnpm install
    if ($LASTEXITCODE -ne 0) {
        throw "pnpm install failed with exit code $LASTEXITCODE."
    }

    Write-Host "Generating the Prisma client..."
    corepack pnpm db:generate
    if ($LASTEXITCODE -ne 0) {
        throw "Prisma client generation failed with exit code $LASTEXITCODE."
    }
    Write-Host "Setup completed."
}
finally {
    Pop-Location
}
