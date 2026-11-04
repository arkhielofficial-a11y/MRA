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

The public repository was created at
[`arkhielofficial-a11y/MRA`](https://github.com/arkhielofficial-a11y/MRA).
GitHub CLI uses the owner's secure credential store. The GitHub Actions upload
requires the OAuth `workflow` scope; authorize it through GitHub's official
device flow before pushing commits that add or change workflow files.

The remote default branch and pushed branch SHAs are verified through the GitHub
API. Branch protection and required checks still need to be configured in
GitHub settings. No GitHub credentials are stored in the repository.
