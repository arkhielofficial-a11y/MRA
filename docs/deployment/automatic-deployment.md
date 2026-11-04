# Automatic deployment workflow

## Status

The local MRA repository is not connected to GitHub. The authenticated Vercel
account has no MRA project. No Preview or Production deployment has been
created, and no deployment URL exists yet.

## After the repository is connected

1. Push `main` and `development` to the GitHub repository.
2. Connect the repository to Vercel through Vercel's official GitHub App.
3. Create two Vercel projects from the same monorepo, configured as described
   in [Vercel](vercel.md).
4. Set `main` as the Production Branch in both projects.
5. Configure GitHub branch protection for `main`: require pull requests and
   the `validate` CI job before merging; disallow direct pushes and force
   pushes. Keep branch-protection rules in GitHub settings rather than granting
   this repository's CI write permission.

With the Git integration enabled, Vercel automatically creates Preview
deployments for non-production branch pushes and pull requests, and a
Production deployment for commits on the configured production branch. A push
to `development` is a Preview, never a Production deployment.

The GitHub Actions workflow is read-only and runs type checks, tests, and an
advisory audit. It intentionally does not build a second production artifact
or invoke Vercel deploy commands: Vercel performs the deployment build. Protect
`main` with required CI checks so a change reaches the production branch only
after quality checks pass.

Do not add an automation that commits or pushes changes on behalf of an agent.
Changes should be reviewed and pushed through the normal owner-approved Git
workflow. CI has only `contents: read` and cannot change repository content.

## Promotion and safety

- Test the GitHub integration and Preview URLs before enabling normal production
  traffic. Do not add a custom production domain during Preview setup.
- Merge only reviewed, passing pull requests into `main`.
- Destructive schema changes, credentials, security-sensitive changes, and
  paid resources require separate owner approval.
- Confirm each Vercel deployment's Ready status and check the actual site and
  API `/api/v1/health` URL. A passing GitHub workflow alone does not prove a
  deployment succeeded.

References: [Vercel Git deployments](https://vercel.com/docs/git),
[GitHub integration](https://vercel.com/docs/git/vercel-for-github).
