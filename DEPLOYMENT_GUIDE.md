# 🚀 Deployment Guide — Firebase Hosting + GitHub Actions CI/CD

This portfolio is deployed to **Firebase Hosting** (project: `niranjan-portfolio-2026`) with automated CI/CD via **GitHub Actions**. Every push to `main` triggers a production deployment, and every Pull Request gets a live preview URL.

---

## How It Works

```
Push to main  ──►  GitHub Actions  ──►  npm ci && npm run build  ──►  Firebase Hosting (live)
Open a PR     ──►  GitHub Actions  ──►  npm ci && npm run build  ──►  Firebase Preview Channel (temp URL)
```

The workflows live in `.github/workflows/`:
- **`firebase-hosting-merge.yml`** — Production deploy on merge to `main`
- **`firebase-hosting-pull-request.yml`** — Preview deploy on every PR

---

## First-Time Setup: Adding the Service Account Secret

The GitHub Actions workflows authenticate to Firebase using a **Service Account JSON** stored as a GitHub Secret. This is a one-time setup.

### Step 1 — Create a Firebase Service Account Key

1. Go to the [Firebase Console](https://console.firebase.google.com/project/niranjan-portfolio-2026/settings/serviceaccounts/adminsdk)
2. Click **"Generate new private key"**
3. Download the JSON file (keep it safe — don't commit it!)

### Step 2 — Add Secret to GitHub

1. Go to your repo → **Settings** → **Secrets and variables** → **Actions**
   - Direct link: `https://github.com/NiranjanSaravanakumar/MyPortfolio/settings/secrets/actions`
2. Click **"New repository secret"**
3. Name: `FIREBASE_SERVICE_ACCOUNT_NIRANJAN_PORTFOLIO_2026`
4. Value: Paste the entire contents of the downloaded JSON file
5. Click **"Add secret"**

### Step 3 — Push to trigger

Once the secret is added, any push to `main` or any PR will automatically trigger the CI/CD pipeline.

---

## Local Development

```bash
npm install       # Install dependencies
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Build static export to out/
npm run lint      # Run ESLint
```

## Manual Deploy (Emergency)

If you need to deploy manually without GitHub Actions:

```bash
npm ci && npm run build
npx firebase-tools@latest deploy --only hosting --project niranjan-portfolio-2026
```

---

## Firebase Project Info

| Key | Value |
|-----|-------|
| Project ID | `niranjan-portfolio-2026` |
| Project Number | `415847197442` |
| Hosting Public Dir | `out/` |
| Custom Domain | Linked via Namecheap (Firebase Hosting → Custom Domain) |
| Build Output | Next.js static export (`output: 'export'`) |

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Action fails with "Permission denied" | Verify the `FIREBASE_SERVICE_ACCOUNT_NIRANJAN_PORTFOLIO_2026` secret is set correctly |
| Build fails with "Module not found" | Run `npm ci` locally and check for missing deps |
| Preview URL not posted on PR | Ensure the workflow has `pull-requests: write` permission (already configured) |
| Custom domain not resolving | Check Namecheap DNS → Firebase Hosting console for domain status |
