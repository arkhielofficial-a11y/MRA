# Fabric mod setup

The mod targets Minecraft Java 1.16.1 with Fabric Loader 0.14.25, Yarn
`1.16.1+build.21`, and Fabric API `0.42.0+1.16`. These artifacts were checked
against Fabric's version metadata and Maven repository during bootstrap.

The client initializer only logs that the foundation loaded. It does not
authenticate, connect to MRA, inspect gameplay, or submit results.

The build is configured for Java 8 bytecode compatibility. The repository
includes the official Gradle 9.2.1 wrapper; it downloads Gradle into the user's
Gradle cache on first use. A JDK supported by Gradle (17+) is required. The
Fabric mod foundation has built successfully with the available JDK 25; the
installed Java runtime may differ from the target game's Java runtime, so
validate against an actual Minecraft 1.16.1 installation before release.

The precise mod dependency is pinned in `gradle.properties`; do not update
legacy game dependencies without checking that the artifact still targets
Minecraft 1.16.1.
