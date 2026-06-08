# 🚀 How to Deploy Your Portfolio to Vercel

You have a Next.js application, which makes **Vercel** the perfect place to deploy it for free.

## Option 1: Automatic Deployment via GitHub (Recommended)
This is the best method because it automatically updates your live site whenever you push code changes.

### 1. Push your code to GitHub
If you haven't already:
1. Create a [new repository on GitHub](https://github.com/new).
2. Run these commands in your project folder (if not already initialized):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login.
2. Click **"Add New..."** -> **"Project"**.
3. Select **"Continue with GitHub"**.
4. Find your repository `neo-portfolio` in the list and click **"Import"**.

### 3. Configure Project
Vercel should auto-detect everything:
- **Framework Preset**: Next.js
- **Root Directory**: `.` (or `./neo-portfolio` if that's your structure)
- **Environment Variables**: 
  - Open the "Environment Variables" section.
  - Add your `NEXT_PUBLIC_WEB3FORMS_KEY` here (value: `your-key-here`).

### 4. Deploy
Click **"Deploy"**. Vercel will build your site and give you a live URL (e.g., `neo-portfolio.vercel.app`) in about a minute!

---

## Option 2: Drag & Drop (Manual)
If you don't want to use Git right now:

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run the deploy command in your project folder:
   ```bash
   vercel
   ```
3. Log in and follow the prompts (say "Yes" to everything).
4. **Note**: You will still need to add your Environment Variables in the Vercel project dashboard settings after deployment for the contact form to work.

## ✅ Important Checklist
- Ensure your `NEXT_PUBLIC_WEB3FORMS_KEY` is set in Vercel.
- If you use any other API keys, add them too.
