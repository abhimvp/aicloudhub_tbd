# Future AI Cloud Hub

A modern Next.js web application showcasing AI Cloud Hub services, courses, and blog content.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### 1. Node.js (Required)

- **Version**: Node.js 18.x or higher (20.x recommended)
- **Download**: [https://nodejs.org/](https://nodejs.org/)
- **Verify installation**: Open terminal/command prompt and run:

```bash
  node --version
```

You should see something like `v20.x.x`

### 2. pnpm (Required Package Manager)

- This project uses **pnpm** as the package manager
- **Install pnpm** globally after installing Node.js:

```bash
  npm install -g pnpm
```

- **Verify installation**:

```bash
  pnpm --version
```

You should see version `10.16.1` or higher

### 3. Git (Recommended)

- **Download**: [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Required if you're cloning the repository

## Getting Started

Follow these steps to run the application on your local machine:

### Step 1: Clone or Extract the Repository

If you received a Git repository:

```bash
git clone <repository-url>
cd future-aicloudhub-main
```

If you received a ZIP file, extract it and navigate to the folder in your terminal.

### Step 2: Install Dependencies

Open your terminal in the project root directory and run:

```bash
pnpm install
```

This will install all required packages. It may take a few minutes.

### Step 3: Run the Development Server

Start the development server:

```bash
pnpm dev
```

### Step 4: Open in Browser

Once the server starts successfully, open your browser and navigate to:

```
http://localhost:3000
```

You should see the Future AI Cloud Hub website running!

## Available Scripts

- **`pnpm dev`** - Runs the development server with hot-reload
- **`pnpm build`** - Creates an optimized production build
- **`pnpm start`** - Runs the production build (run `pnpm build` first)
- **`pnpm lint`** - Checks code for linting errors

## Project Structure

```
├── app/              # Next.js app directory (pages and routes)
├── components/       # Reusable React components
├── lib/             # Utility functions and data
├── public/          # Static assets (images, videos, etc.)
├── utils/           # Helper utilities (GSAP, motion)
└── package.json     # Project dependencies
```

## Troubleshooting

### Port 3000 is already in use

If you see an error about port 3000 being in use:

- Stop any other applications running on port 3000
- Or run on a different port:

```bash
  pnpm dev -p 3001
```

### Installation errors

If `pnpm install` fails:

1. Delete `node_modules` folder and `pnpm-lock.yaml`
2. Run `pnpm install` again

### Node version issues

Make sure you're using Node.js 18 or higher. Check with:

```bash
node --version
```

## Customizing Content & Mock Data

If you want to modify the website content (courses, blogs, services, etc.), you can edit the following data files located in the `lib/` folder:

### Data Files

1. **`lib/blogData.ts`**

   - Contains all blog posts data
   - Edit blog titles, content, excerpts, authors, categories, and tags
   - Add or remove blog posts

2. **`lib/courseData.ts`**

   - Contains all courses information
   - Modify course details, pricing, syllabus, instructors, and descriptions
   - Add new courses or update existing ones

3. **`lib/constants.ts`**
   - Contains navigation items, categories, services, and other static content
   - Edit navigation menu, service descriptions, and category information

### How to Edit

1. Open the relevant file from the `lib/` folder in any text editor
2. Locate the data you want to modify (it's structured as JavaScript/TypeScript objects)
3. Make your changes
4. Save the file
5. The website will automatically refresh with your new content (if dev server is running)

### Example: Editing a Blog Post

Open `lib/blogData.ts` and find the blog post you want to edit:

```typescript
{
  id: 1,
  title: "Your Blog Title",
  excerpt: "Your excerpt here",
  content: "Full blog content...",
  // ... modify any field
}
```

## Notes

- All images and videos are located in the `public/` folder
- The application uses Next.js 15, React 19, Tailwind CSS 4, and GSAP for animations
- No environment variables are required for basic functionality

## Production Checklist

### 🚀 Critical Items to Review Before Launch

#### 1. **Email Integration for Course Inquiries**

The course inquiry form is currently set up but needs email service integration:

**Current Status:**
- API endpoint exists at `app/api/course-inquiry/route.ts`
- Form submissions are logged to console but NOT sent as emails

**Action Required:**
Choose and integrate an email service provider:

**Option A: Resend (Recommended - Simple & Modern)**
```bash
pnpm add resend
```

Then update `app/api/course-inquiry/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Replace the TODO section with:
await resend.emails.send({
  from: 'noreply@aicloudhub.com',
  to: 'info@acloudhub.com',
  subject: emailContent.subject,
  text: emailContent.body,
});
```

Add to `.env.local`:
```
RESEND_API_KEY=your_api_key_here
```

**Option B: SendGrid**
```bash
pnpm add @sendgrid/mail
```

**Option C: AWS SES, Mailgun, or other provider**

**Testing:**
- Submit a test inquiry form
- Verify email arrives at info@acloudhub.com
- Check spam folder if not received

#### 2. **Business Verticals Pages**

Three service pages need to be created:

**Missing Pages:**
- `app/services/it-services/page.tsx` - List all IT sub-services
- `app/services/corporate-training/page.tsx` - List training programs
- `app/services/staffing/page.tsx` - List staffing solutions

**Data Structure Available:**
The `BusinessVerticals` constant in `lib/constants.ts` contains all sub-services for each vertical.

**Action Required:**
Create these three pages that:
- Display the vertical's sub-services
- Include inquiry forms
- Show relevant images and descriptions

#### 3. **Image Assets**

**Placeholder Images to Replace:**
- `/images/it-services.jpg` - Hero scroller IT Services card
- `/images/training.jpg` - Hero scroller Training card
- `/images/staffing.jpg` - Hero scroller Staffing card

**Action Required:**
- Add professional photos to `public/images/` folder
- Consider adding team photos or "smiling images" as mentioned in client feedback
- Update image paths in Hero component if needed

#### 4. **Contact Form Integration**

The contact page likely needs similar email integration as the course inquiry form.

**Action Required:**
- Review `app/contact/page.tsx`
- Ensure contact form submissions are sent to info@acloudhub.com
- Test contact form functionality

#### 5. **Content Review**

**Items to Verify:**
- [ ] All company information is accurate
- [ ] Course descriptions are up-to-date
- [ ] Instructor information is correct
- [ ] Blog posts are relevant
- [ ] Service descriptions match current offerings
- [ ] Client logos are approved for use

#### 6. **SEO & Metadata**

**Action Required:**
- Add proper meta descriptions to all pages
- Set up Open Graph tags for social sharing
- Create sitemap.xml
- Add robots.txt
- Configure Google Analytics or tracking

#### 7. **Performance & Security**

**Before Launch:**
- [ ] Run Lighthouse audit
- [ ] Test on mobile devices
- [ ] Test all forms in production environment
- [ ] Set up error monitoring (e.g., Sentry)
- [ ] Configure rate limiting on API endpoints
- [ ] Add CAPTCHA to forms if needed (spam protection)

#### 8. **Domain & Email Configuration**

**Email Setup:**
- Ensure `noreply@aicloudhub.com` is configured
- Verify `info@acloudhub.com` is monitored
- Set up SPF, DKIM, and DMARC records for email deliverability

**Domain:**
- Point domain to hosting provider
- Configure SSL certificate
- Test all redirects

### 📋 Quick Launch Checklist

```
[ ] Email service integrated and tested
[ ] All three business vertical pages created
[ ] Placeholder images replaced with actual photos
[ ] Contact form tested and working
[ ] All content reviewed and approved
[ ] SEO metadata added
[ ] Performance audit passed
[ ] Mobile testing completed
[ ] Forms tested with spam scenarios
[ ] Email deliverability verified
[ ] Domain and SSL configured
[ ] Error monitoring set up
[ ] Backup strategy in place
```

## Support

If you encounter any issues during setup, please reach out with:

- Your operating system (Windows/Mac/Linux)
- Node.js version (`node --version`)
- pnpm version (`pnpm --version`)
- Any error messages you're seeing
