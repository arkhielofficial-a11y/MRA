# GitHub integration

The repository is initialized locally with `main` and `development` branches.
The GitHub Actions workflow runs install, typecheck, tests, and builds on pushes
to those branches and on pull requests. A GitHub remote and online repository
have not been created.

To enable automatic Preview deployments:

1. Create a GitHub repository under the owner's account.
2. Add it as the `origin` remote and push `main` and `development`.
3. Import the repository in Vercel and connect the two Vercel projects as
   described in [Vercel deployment](vercel.md).
4. Configure `main` as the Production Branch. Treat `development` and feature
   branches as Preview branches.
5. Require CI checks and review for pull requests. Do not automatically promote
   unreviewed changes to production.

No GitHub credentials or Vercel credentials are stored in this repository.
