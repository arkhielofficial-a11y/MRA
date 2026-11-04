$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Push-Location $root
try {
    corepack pnpm test
    if ($LASTEXITCODE -ne 0) {
        throw "Workspace tests failed with exit code $LASTEXITCODE."
    }

    Push-Location (Join-Path $root "minecraft\fabric-mod")
    try {
        .\gradlew.bat test
        if ($LASTEXITCODE -ne 0) {
            throw "Fabric tests failed with exit code $LASTEXITCODE."
        }
    }
    finally {
        Pop-Location
    }
}
finally {
    Pop-Location
}
