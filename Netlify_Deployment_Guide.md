# Netlify Deployment Guide

This guide will walk you through the process of deploying your Taniti Tourism website to Netlify, which will give you a public URL that you can share with your instructor.

## What is Netlify?

Netlify is a web hosting platform that specializes in static website hosting. It offers a simple drag-and-drop interface for deploying websites, making it one of the easiest ways to get your site online with a public URL.

## Step 1: Create a Netlify Account

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up" and choose a sign-up method (GitHub, GitLab, Bitbucket, or email)
3. Complete the registration process

## Step 2: Deploy Your Website

### Option 1: Drag and Drop (Easiest)

1. Log in to your Netlify account
2. On your Netlify dashboard, you'll see a deployment area that says "Drag and drop your site folder here"
3. Open your file explorer and navigate to your Taniti Tourism website folder
4. Select all files and folders in your website directory
5. Drag and drop them onto the deployment area in Netlify

### Option 2: Connect to Git Repository (If you're using GitHub)

1. Push your website files to a GitHub repository
2. In your Netlify dashboard, click "New site from Git"
3. Choose GitHub as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select your repository
6. Configure your build settings (for a simple static site, you can leave these as default)
7. Click "Deploy site"

## Step 3: Configure Your Site

1. Once your site is deployed, Netlify will assign it a random subdomain (e.g., `random-words-123456.netlify.app`)
2. You can customize this subdomain by clicking on "Site settings" and then "Change site name"
3. Choose a more descriptive name like `taniti-tourism` (if available)
4. Your site will now be accessible at `https://taniti-tourism.netlify.app` (or whatever name you chose)

## Step 4: Verify Your Deployment

1. Click on the link to your newly deployed site to make sure everything is working correctly
2. Test the navigation and interactive elements to ensure they function as expected
3. If you notice any issues, you can make changes to your local files and redeploy using the same method

## Step 5: Submit the URL

1. Copy your Netlify URL (e.g., `https://taniti-tourism.netlify.app`)
2. Submit this URL as required in your assignment

## Updating Your Site

If you need to make changes to your website:

1. Make the changes to your local files
2. If you used the drag-and-drop method, simply drag and drop your updated files to the Netlify dashboard again
3. If you connected to a Git repository, push your changes to the repository and Netlify will automatically redeploy your site

## Troubleshooting

### Images or styles not loading

- Make sure all file paths in your HTML, CSS, and JavaScript files are relative paths
- Check that all required files were included in your deployment
- Verify that file names and paths match exactly (case-sensitive)

### Interactive elements not working

- Check the browser console for JavaScript errors
- Ensure all JavaScript files are properly linked in your HTML
- Verify that your JavaScript code is compatible with modern browsers

## Additional Features

Netlify offers several additional features that might be useful:

- **Forms**: Collect form submissions without a backend server
- **Functions**: Add serverless functions to your static site
- **Analytics**: Get insights about your site visitors
- **Custom domains**: Connect your own domain name if you have one

These features are not required for your assignment but can be explored if you're interested in enhancing your website further.
