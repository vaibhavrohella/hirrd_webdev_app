# Hirrd - Job Portal Web Application

A modern, full-stack job portal website built with React that connects job seekers with recruiters. The platform provides a seamless experience for candidates to find opportunities and for recruiters to discover talent.

## 🌟 Live Demo

**Deployed Application:** [https://hirrd-webdev-app-51vt.vercel.app/](https://hirrd-webdev-app-51vt.vercel.app/)

## 📖 Overview

Hirrd is a comprehensive job portal that facilitates the hiring process by providing:
- **For Candidates**: Browse jobs, apply to positions, track application status
- **For Recruiters**: Post job listings, manage applications, find qualified candidates
- **Dual Authentication**: Separate authentication flows for candidates and recruiters

## ✨ Key Features

### For Job Seekers
- 🔍 **Job Search & Filtering**: Advanced search with filters by location, company, job type
- 📝 **Easy Application Process**: One-click apply with profile information
- 📊 **Application Tracking**: Monitor application status and history
- 👤 **Profile Management**: Create and maintain professional profiles

### For Recruiters
- 📈 **Job Posting Management**: Create, edit, and manage job listings
- 👥 **Candidate Management**: Review applications and candidate profiles
- 📋 **Application Tracking**: Monitor and update application statuses
- 🏢 **Company Profiles**: Manage company information and branding

### General Features
- 🔐 **Secure Authentication**: Role-based access control via Clerk
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Vite for optimal loading speeds
- 🎨 **Modern UI**: Clean, intuitive interface using Shadcn UI components

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Shadcn UI** - Modern, accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

### Backend & Services
- **Supabase** - Backend-as-a-Service (Database, API, Real-time)
- **Clerk** - Authentication and user management
- **Vercel** - Deployment and hosting platform

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/vaibhavrohella/hirrd_webdev_app.git
cd hirrd_webdev_app
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory and add the following environment variables:

```env
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Database Setup
1. Create a new project in [Supabase](https://supabase.com)
2. Set up the required tables (users, jobs, applications, companies)
3. Configure Row Level Security (RLS) policies
4. Update your environment variables with Supabase credentials

### 5. Authentication Setup
1. Create a new application in [Clerk](https://clerk.com)
2. Configure authentication providers (email/password, social login)
3. Set up user metadata for role-based access (candidate/recruiter)
4. Update your environment variables with Clerk credentials

### 6. Run Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 🚀 Deployment

This project is deployed on Vercel. To deploy your own instance:

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
# Deploy to production
vercel --prod
```

## 📁 Project Structure

```
hirrd_webdev_app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Shadcn UI components
│   │   └── custom/         # Custom components
│   ├── pages/              # Page components
│   │   ├── auth/           # Authentication pages
│   │   ├── jobs/           # Job-related pages
│   │   └── dashboard/      # User dashboards
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── lib/                # Library configurations
│   │   ├── supabase.js     # Supabase client
│   │   └── clerk.js        # Clerk configuration
│   ├── styles/             # CSS files
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Application entry point
├── .env.example            # Environment variables template
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
└── tailwind.config.js      # Tailwind CSS configuration
```

## 🎯 Usage

### For Job Seekers
1. **Sign Up/Login** as a candidate
2. **Complete Profile** with skills, experience, and resume
3. **Browse Jobs** using search and filters
4. **Apply to Positions** with one-click apply
5. **Track Applications** in your dashboard

### For Recruiters
1. **Sign Up/Login** as a recruiter
2. **Set Up Company Profile** with details and branding
3. **Post Job Listings** with detailed requirements
4. **Review Applications** and candidate profiles
5. **Manage Hiring Process** through the dashboard

## 📸 Screenshots

*Add your screenshots in the following locations:*

1. **Create a `screenshots` folder** in your repository root
2. **Add the following screenshots:**
   - `homepage.png` - Landing page
     <img width="1898" height="913" alt="image" src="https://github.com/user-attachments/assets/936150ac-c094-4763-8a6d-217792e04697" />

   - `job-listings.png` - Job search and listings
     <img width="1890" height="913" alt="image" src="https://github.com/user-attachments/assets/f3a7214b-36f8-454e-b4bc-b4cab7254273" />

   - `job-detail.png` - posting a job
     <img width="1897" height="903" alt="image" src="https://github.com/user-attachments/assets/9cca538f-b47c-470a-bd8b-515642cc26ed" />

     
   - `candidate-dashboard.png` - Candidate dashboard
     <img width="1891" height="902" alt="image" src="https://github.com/user-attachments/assets/b54c9b9c-52ac-434b-837b-361a5ca628fd" />

   - `recruiter-dashboard.png` - Recruiter dashboard
     <img width="1894" height="910" alt="image" src="https://github.com/user-attachments/assets/da44a187-f25b-4329-b9e1-a5a7bc139cb1" />
     <img width="1889" height="913" alt="image" src="https://github.com/user-attachments/assets/865d0adb-2c45-4e4e-acfb-888b8ec374f2" />

   - `application-form.png` - Job application process
     <img width="1918" height="897" alt="image" src="https://github.com/user-attachments/assets/0e612c22-2794-4f86-850c-686392e27499" />

   - `profile-page.png` - Saved Jobs
     <img width="1888" height="901" alt="image" src="https://github.com/user-attachments/assets/08feda74-aadc-4747-974a-7cbbabbeb5e9" />
     


## 🔧 Configuration

### Supabase Database Schema

Key tables structure:
- **profiles** - User profile information
- **companies** - Company details and branding
- **jobs** - Job postings with requirements
- **applications** - Job applications and status
- **skills** - Skills and technologies

### Clerk Authentication Setup

Configure user roles and metadata:
- Role-based access control
- Custom user fields
- Social authentication providers
- Email verification settings

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Vaibhav Rohella**
- GitHub: [@vaibhavrohella](https://github.com/vaibhavrohella)
- LinkedIn: [Connect with me](nkedin.com/in/vaibhav-rohella-37747b267/)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Shadcn UI](https://ui.shadcn.com/) - UI components
- [Clerk](https://clerk.com/) - Authentication service
- [Supabase](https://supabase.com/) - Backend infrastructure
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

If you have any questions or run into issues, please:
1. Check the [Issues](https://github.com/vaibhavrohella/hirrd_webdev_app/issues) section
2. Create a new issue if your problem isn't already addressed
3. Provide detailed information about the problem you're experiencing

---

⭐ **If you found this project helpful, please consider giving it a star!**
