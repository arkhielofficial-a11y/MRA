# Launcher architecture

The launcher is a Vite/React UI embedded in a Tauri 2 Rust shell. The UI can be
built independently with pnpm. The Rust shell and Windows desktop bundle
require Rust/Cargo and the operating-system build prerequisites.

The current screen is a foundation preview only. There is no login, Microsoft
OAuth, Java/Minecraft installation, Fabric installation, instance manager,
mod updater, credential storage, or game launch implementation. The Tauri
bundle is disabled until release signing and packaging are designed.

Keep credentials in secure OS storage when authentication is implemented;
never write tokens to application logs or plaintext config files.
