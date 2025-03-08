# Deployment Guide: Getting a URL for Your Taniti Tourism Website

This guide will walk you through the process of deploying your Taniti Tourism website to GitHub Pages, which will give you a public URL that you can share with your instructor.

## What is GitHub Pages?

GitHub Pages is a free hosting service provided by GitHub that allows you to publish static websites directly from a GitHub repository. It's perfect for hosting HTML, CSS, and JavaScript websites like your Taniti Tourism prototype.

## Step 1: Create a GitHub Account (if you don't have one)

1. Go to [github.com](https://github.com)
2. Click "Sign up" and follow the instructions to create an account
3. Verify your email address

## Step 2: Create a New Repository

1. Once logged in, click the "+" icon in the top-right corner and select "New repository"
2. Name your repository `taniti-tourism` (or any name you prefer)
3. Make sure the repository is set to "Public"
4. Click "Create repository"

## Step 3: Upload Your Website Files

### Option 1: Using the GitHub Web Interface

1. In your new repository, click "Add file" > "Upload files"
2. Drag and drop all your website files (HTML, CSS, JS) or click to select them from your computer
3. Add a commit message like "Initial website upload"
4. Click "Commit changes"

### Option 2: Using Git Command Line (Advanced)

If you're familiar with Git, you can use these commands:

```bash
# Navigate to your website directory
cd /path/to/your/taniti-website

# Initialize a Git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial website upload"

# Add the remote repository
git remote add origin https://github.com/YOUR-USERNAME/taniti-tourism.git

# Push to GitHub
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. In your repository, go to "Settings" (tab at the top)
2. Scroll down to the "GitHub Pages" section (or click "Pages" in the sidebar)
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait a few minutes for your site to be published

## Step 5: Access Your Website URL

1. After enabling GitHub Pages, refresh the GitHub Pages settings page
2. You'll see a message saying "Your site is published at https://YOUR-USERNAME.github.io/taniti-tourism/"
3. Click on this URL to verify your website is working correctly

## Step 6: Submit the URL

1. Copy the URL (https://YOUR-USERNAME.github.io/taniti-tourism/)
2. Submit this URL as required in your assignment

## Troubleshooting

### My website doesn't appear or looks broken

- Make sure your `index.html` file is in the root directory of your repository
- Check that all file paths in your HTML, CSS, and JavaScript files are correct
- Wait a few minutes as GitHub Pages may take some time to update

### Images don't appear

- Make sure your image paths are relative (e.g., `images/beach.jpg` instead of `/images/beach.jpg`)
- Verify that image files were uploaded correctly to the repository

### I need to make changes

1. Make your changes locally
2. Upload the updated files using the same method as before
3. GitHub Pages will automatically update with your changes (may take a few minutes)

## Alternative Deployment Options

If you prefer not to use GitHub Pages, here are some alternatives:

### Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up for a free account
3. Drag and drop your website folder onto the Netlify dashboard
4. Netlify will deploy your site and give you a URL

### Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up for a free account
3. Create a new project and import your files
4. Vercel will deploy your site and give you a URL

## Need Help?

If you encounter any issues with deployment, you can:

1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Search for solutions on [Stack Overflow](https://stackoverflow.com)
3. Contact GitHub support or your instructor for assistance
