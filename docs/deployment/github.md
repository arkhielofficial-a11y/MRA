# GitHub integration

The repository is initialized locally with `main` and `development` branches.
The public GitHub repository
[`arkhielofficial-a11y/MRA`](https://github.com/arkhielofficial-a11y/MRA) is
the `origin` remote; both branches have been pushed and `main` is the default.
The GitHub Actions workflow runs install, typecheck, tests, and a dependency
audit on pushes to those branches and on pull requests. Vercel, not Actions,
performs the deployment build. Branch protection and required checks are not
configured yet.

To enable automatic Preview deployments:

1. Push validated changes to `development`; confirm Vercel creates Preview
   deployments for both apps.
2. Require the `validate` GitHub Actions job and pull-request review for `main`;
   disable direct and force pushes to `main`.
3. Do not commit credentials or environment files. Vercel Git integration
   deploys branch pushes and pull requests after the repository is connected.

GitHub CLI uses the owner's secure credential store. The GitHub Actions upload
requires the OAuth `workflow` scope; authorize it through GitHub's official
device flow before pushing commits that add or change workflow files.

The remote default branch and pushed branch SHAs are verified through the GitHub
API. Vercel's GitHub integration is connected to both MRA projects. Branch
protection and required checks still need to be configured in GitHub settings.
No GitHub credentials are stored in the repository.
