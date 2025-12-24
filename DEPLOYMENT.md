# Deployment Guide

## Quick Start - Deploy to Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier works perfectly)

### Step-by-Step Deployment

1. **Prepare Your Code**
   ```bash
   # Make sure all files are committed
   git add .
   git commit -m "Ready for deployment"
   ```

2. **Push to GitHub**
   ```bash
   # If you haven't already, create a GitHub repository
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy" (no configuration needed!)

4. **Update Domain Settings** (After first deployment)
   - In your Vercel project dashboard, go to "Settings" → "Domains"
   - Update `app/sitemap.ts` and `app/robots.ts` with your actual domain
   - Or set `NEXT_PUBLIC_SITE_URL` environment variable in Vercel

## Environment Variables

### Optional: Email Service Setup

If you want the contact form to send emails, set up an email service:

#### Option 1: Resend (Recommended)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. In Vercel: Settings → Environment Variables
   - Add `RESEND_API_KEY` = `your_api_key`
4. Update `app/api/contact/route.ts`:
   ```typescript
   import { Resend } from 'resend'
   const resend = new Resend(process.env.RESEND_API_KEY)
   // ... rest of email sending code
   ```

#### Option 2: SendGrid
Similar process, but use SendGrid's API instead.

## Post-Deployment Checklist

- [ ] Update domain in `app/sitemap.ts` and `app/robots.ts`
- [ ] Set up email service (optional but recommended)
- [ ] Test contact form
- [ ] Verify all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Test dark mode toggle
- [ ] Verify SEO meta tags (use browser dev tools)

## Custom Domain Setup

1. In Vercel dashboard: Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (usually 24-48 hours)
5. Update sitemap and robots.txt with new domain

## Troubleshooting

### Build Errors
- Check Node.js version (should be 18+)
- Run `npm install` locally to verify dependencies
- Check Vercel build logs for specific errors

### Contact Form Not Working
- Verify API route is accessible: `yourdomain.com/api/contact`
- Check browser console for errors
- Verify environment variables are set in Vercel

### Styling Issues
- Clear browser cache
- Verify Tailwind CSS is compiling (check build logs)
- Ensure `tailwind.config.ts` is correct

## Performance Optimization

Vercel automatically handles:
- ✅ Image optimization
- ✅ Code splitting
- ✅ Static generation
- ✅ Edge caching

No additional configuration needed!

## Monitoring

Vercel provides:
- Analytics (upgrade to Pro for detailed analytics)
- Performance metrics
- Error tracking
- Deployment logs

---

**Your site should be live in under 5 minutes!** 🚀

