# GitHub integration

The repository is initialized locally with `main` and `development` branches.
The GitHub Actions workflow runs install, typecheck, tests, and a dependency
audit on pushes to those branches and on pull requests. Vercel, not Actions,
performs the deployment build. A GitHub remote and online repository have not
been created. The authenticated GitHub tooling available in this workspace is
read-only, and the GitHub CLI is not installed.

To enable automatic Preview deployments:

1. Create a repository named `MRA` under the owner's GitHub account, using the
   owner's desired visibility. Do not initialize the online repository with a
   README or license; the local repository already has commits.
2. Add the actual repository URL as `origin`, then push `main` and
   `development` after confirming the destination in GitHub.
3. Install/authorize Vercel's GitHub App for that repository and import it in
   Vercel as described in [Vercel deployment](vercel.md).
4. Require the `validate` GitHub Actions job and pull-request review for `main`;
   disable direct and force pushes to `main`.
5. Do not commit credentials or environment files. Vercel Git integration
   deploys branch pushes and pull requests after the repository is connected.

No GitHub credentials or Vercel credentials are stored in this repository.
Current branches and commits remain local; no push or repository creation has
been attempted.
