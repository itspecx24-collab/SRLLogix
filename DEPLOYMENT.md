# GitHub Pages Deployment Guide

This repository is configured for automatic deployment to GitHub Pages.

## 🚀 Automatic Deployment

The site will automatically deploy when you push to the `main` branch:

1. **Push to main branch**:
   ```bash
   git push origin main
   ```

2. **GitHub Actions** will:
   - Minify HTML, CSS, and JavaScript
   - Optimize images
   - Deploy to GitHub Pages

3. **Site will be live at**: `https://[username].github.io/windsurf-project-2`

## 📋 Prerequisites

1. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "GitHub Pages" section
   - Source: "Deploy from a branch"
   - Branch: `main` and `/ (root)`
   - Save

2. **GitHub Actions Permissions**:
   - Settings → Actions → General
   - Workflow permissions: "Read and write permissions"
   - Allow GitHub Actions to approve pull requests

## 🔧 Manual Deployment

If automatic deployment fails, you can deploy manually:

### Option 1: GitHub Pages Direct
1. Go to Settings → Pages
2. Source: "Deploy from a branch"
3. Select `main` branch and `/ (root)`
4. Click Save

### Option 2: gh-pages Branch
1. Create `gh-pages` branch:
   ```bash
   git checkout --orphan gh-pages
   git reset --hard
   git commit --allow-empty -m "Init gh-pages"
   git push origin gh-pages
   ```

2. In Settings → Pages, select `gh-pages` branch

## 📊 Deployment Status

Check deployment status:
- **GitHub Actions**: Actions tab in repository
- **GitHub Pages**: Settings → Pages section
- **Live Site**: Visit the deployed URL

## 🛠️ Troubleshooting

### Common Issues

1. **404 Errors**:
   - Check file paths are correct
   - Ensure `index.html` exists in root
   - Verify case sensitivity

2. **CSS/JS Not Loading**:
   - Check relative paths (`assets/css/style.css`)
   - Ensure files are committed to repository
   - Check GitHub Pages build logs

3. **Images Not Showing**:
   - Verify image files exist in `assets/images/`
   - Check file extensions and case
   - Ensure images are under 25MB (GitHub limit)

4. **GitHub Actions Fails**:
   - Check Actions tab for error details
   - Verify workflow syntax
   - Check repository permissions

### Debug Steps

1. **Check Build Logs**:
   - Go to Actions tab
   - Click on failed workflow
   - Review error messages

2. **Local Testing**:
   ```bash
   # Start local server
   python -m http.server 8000
   # or
   npx serve .
   ```

3. **Validate HTML**:
   - Use W3C Validator
   - Check for unclosed tags
   - Verify syntax

## 📈 Performance Optimization

The deployment workflow automatically:
- **Minifies HTML**: Removes whitespace and comments
- **Compresses CSS**: Optimizes stylesheets
- **Uglifies JavaScript**: Reduces file size
- **Optimizes Images**: Compresses images without quality loss

## 🔍 SEO Verification

After deployment:

1. **Google Search Console**:
   - Add property: `https://[username].github.io/windsurf-project-2`
   - Submit sitemap: `https://[username].github.io/windsurf-project-2/sitemap.xml`

2. **Bing Webmaster Tools**:
   - Add site and verify ownership
   - Submit sitemap

3. **Test Tools**:
   - Google PageSpeed Insights
   - GTmetrix
   - Mobile-Friendly Test

## 🔄 Custom Domain (Optional)

To use custom domain:

1. **DNS Settings**:
   - Add A records to your DNS provider:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

2. **GitHub Settings**:
   - Settings → Pages → Custom domain
   - Enter your domain (e.g., `srllogix.com`)
   - Enforce HTTPS

3. **CNAME File**:
   - Create `CNAME` file in root:
   ```
   srllogix.com
   ```

## 📞 Support

For deployment issues:
- GitHub Pages Documentation: https://docs.github.com/en/pages
- GitHub Actions Documentation: https://docs.github.com/en/actions
- Repository Issues: Create an issue in this repository

---

**Note**: First deployment may take 5-10 minutes to propagate globally.
