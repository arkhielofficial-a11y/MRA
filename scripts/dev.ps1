param(
    [switch]$WithDatabase,
    [switch]$WithLauncher
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Push-Location $root
try {
    if ($WithDatabase) {
        if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
            throw "Docker CLI is required for -WithDatabase."
        }
        docker compose -f infrastructure/docker/compose.yml up -d postgres
        if ($LASTEXITCODE -ne 0) {
            throw "Could not start local PostgreSQL. Check that Docker Desktop is running."
        }
    }

    corepack pnpm --filter @mra/protocol build
    if ($LASTEXITCODE -ne 0) {
        throw "Shared protocol build failed with exit code $LASTEXITCODE."
    }
    corepack pnpm --filter @mra/database build
    if ($LASTEXITCODE -ne 0) {
        throw "Database package build failed with exit code $LASTEXITCODE."
    }

    $filters = @("--filter", "@mra/web", "--filter", "@mra/api")
    if ($WithLauncher) {
        $filters += @("--filter", "@mra/launcher")
    }
    & corepack pnpm --parallel @filters dev
    if ($LASTEXITCODE -ne 0) {
        throw "Development processes exited with code $LASTEXITCODE."
    }
}
finally {
    Pop-Location
}
