# Deploy Medicine Dosage Calculator to GitHub Pages

✅ **Your app is built and ready!** The static files are in `client/docs/` folder.

## Quick Setup Instructions

### Option 1: Automated Deployment (Recommended)

1. **Add this script to your package.json**:
   ```json
   "build:pages": "npx vite build --config vite.config.pages.ts"
   ```

2. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Add medicine dosage calculator with GitHub Pages setup"
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your GitHub repository
   - Go to Settings > Pages  
   - Source: "GitHub Actions"
   - The workflow will automatically deploy on every push to main

### Option 2: Manual Deploy from Docs Folder

```bash
# The build files are already created in client/docs/
# Just commit and push them
git add client/docs/
git commit -m "Add built files for GitHub Pages"
git push origin main
```

Then in GitHub Settings > Pages:
- Source: "Deploy from a branch" 
- Branch: "main"
- Folder: "/client/docs"

## What's Been Set Up

✅ **Built static files** - Ready in `client/docs/` folder  
✅ **vite.config.pages.ts** - Vite configuration for GitHub Pages build
✅ **.github/workflows/deploy-pages.yml** - Automated deployment workflow  
✅ **Relative paths** - Configured for GitHub Pages hosting

Your medicine dosage calculator will work perfectly on GitHub Pages with all features intact!