This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on GitHub Pages

This project uses GitHub's automatic deployment to GitHub Pages with Next.js support.

### GitHub Repository Setup

The repository is configured to automatically deploy using GitHub Pages:

1. In repository Settings → Pages
2. Source is set to "GitHub Actions"
3. The `nextjs.yml` workflow handles the deployment automatically

### Automatic Deployment

When you push changes to the `feature-nextjs` branch, GitHub Actions will automatically:

1. Install dependencies using npm
2. Build the Next.js application with static export
3. Deploy directly to GitHub Pages (no separate gh-pages branch needed)

### Manual Deployment

You can also trigger deployment manually:

1. Go to the "Actions" tab in your GitHub repository
2. Click on "Deploy Next.js site to Pages" workflow
3. Click "Run workflow"

### Local Development

To test the build locally before pushing:

```bash
# Build and export
npm run export

# Preview the built files
npx serve out
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
