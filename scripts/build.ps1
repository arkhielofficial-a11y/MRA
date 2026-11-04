$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Push-Location $root
try {
    corepack pnpm build
    if ($LASTEXITCODE -ne 0) {
        throw "Workspace build failed with exit code $LASTEXITCODE."
    }

    Push-Location (Join-Path $root "minecraft\fabric-mod")
    try {
        .\gradlew.bat build
        if ($LASTEXITCODE -ne 0) {
            throw "Fabric mod build failed with exit code $LASTEXITCODE."
        }
    }
    finally {
        Pop-Location
    }
}
finally {
    Pop-Location
}
