# SRL-LOGIX Logistics Platform

A comprehensive logistics management platform with client portal, shipment tracking, and booking system built with HTML, CSS, and JavaScript for GitHub Pages deployment.

## 🚀 Features

- **Stack Auth Integration**: Enterprise-grade authentication with OAuth (Google, GitHub)
- **Client Portal**: Full authentication system with user registration and login
- **Shipment Management**: Book, track, and manage shipments online
- **Real-time Dashboard**: Live shipment status and statistics
- **Document Management**: Secure document upload and management
- **Invoice System**: Generate, view, and pay invoices online
- **Responsive Design**: Mobile-first approach using Bootstrap 5 grid system
- **Modern UI**: Clean, professional Qabula-like design with smooth animations
- **SEO Optimized**: Meta tags, structured data, and sitemap included
- **Interactive Elements**: Gallery with lightbox, contact forms, booking system
- **Performance**: Lazy loading, optimized images, minified assets
- **Accessibility**: Semantic HTML5, ARIA labels, keyboard navigation

## 📁 Project Structure

```
windsurf-project-2/
├── index.html                 # Homepage
├── about.html                 # About page
├── contact.html               # Contact page
├── client.html                # Client Portal - Login & Registration
├── dashboard.html             # User Dashboard - Shipment Management
├── track.html                 # Track & Trace
├── sitemap.xml               # SEO sitemap
├── robots.txt                # Search engine instructions
├── README.md                 # This file
├── docs/
│   └── overview.md           # Portal Documentation
├── assets/
│   ├── css/
│   │   └── style.css         # Main styles (Qabula-like design)
│   ├── js/
│   │   └── main.js          # JavaScript functionality
│   └── images/              # All image assets (68 files)
├── services/
│   ├── index.html           # Services overview
│   ├── air-freight.html     # Air freight services
│   ├── sea-freight.html     # Sea freight services
│   ├── road-freight.html    # Road & rail services
│   ├── warehousing.html     # Warehousing services
│   ├── customs-clearance.html # Customs clearance
│   └── consolidation/
│       ├── china.html       # China to SA consolidation
│       └── nigeria.html     # Nigeria to SA consolidation
└── portals/
    ├── client.html          # Client Portal (Active)
    ├── driver.html          # Driver Portal
    └── agent.html           # Agent Portal
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup, accessibility features
- **CSS3**: Custom properties, flexbox, grid, animations
- **JavaScript ES6+**: Modern JS with DOM manipulation
- **Bootstrap 5**: Grid system, components, utilities
- **Bootstrap Icons**: Icon library
- **Google Fonts**: Inter typography
- **Qabula Design System**: Custom color scheme and styling

## 📱 Pages Overview

### Core Pages
- **Homepage (`index.html`)**: Hero section, services overview, testimonials, statistics
- **About (`about.html`)**: Company story, values, statistics, CTA
- **Contact (`contact.html`)**: Contact form, info cards, map, FAQ, privacy modal

### Portal System
- **Client Portal (`client.html`)**: User registration, login, authentication
- **Dashboard (`dashboard.html`)**: Shipment management, tracking, statistics
- **Track & Trace (`track.html`)**: Public shipment tracking system

### Service Pages
- **Services Overview (`services/index.html`)**: Complete service catalog
- **Air Freight (`services/air-freight.html`)**: Air cargo solutions
- **Sea Freight (`services/sea-freight.html`)**: Ocean freight services
- **Road & Rail (`services/road-freight.html`)**: Ground transportation
- **Warehousing (`services/warehousing.html`)**: Storage solutions
- **Customs Clearance (`services/customs-clearance.html`)**: Brokerage services
- **Consolidation**: China→SA and Nigeria→SA routes

### Specialized Services
- **IOR (`ior.html`)**: Importer of Record services
- **EOR (`eor.html`)**: Exporter of Record services
- **DDP (`ddp.html`)**: Delivered Duty Paid solutions

### Portal Access
- **Client Portal (`client.html`)**: Full client authentication and dashboard
- **Driver Portal (`driver.html`)**: Driver access and management
- **Agent Portal (`agent.html`)**: Agent dashboard and tools

## 🎨 Design Features

### Qabula Design System
- **Primary Navy**: #0b2545 (Deep navy blue)
- **Accent Lemon**: #ffdd57 (Bright lemon yellow)
- **Teal/Green**: #0ea58b (Teal accent)
- **Brand White**: #ffffff (Clean white)
- **Gradient Backgrounds**: Linear gradients for depth
- **Glass Effects**: Frosted glass navigation bar
- **Smooth Animations**: Hover states and transitions

### Typography
- **Headings**: 'Inter', sans-serif (Google Fonts)
- **Body**: 'Inter', sans-serif (Consistent typography)
- **Icons**: Bootstrap Icons 1.10.5

### Responsive Breakpoints
- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: 768px - 992px
- **Large**: > 992px

## 🔐 Authentication & Security

### Client Portal Features
- **User Registration**: Complete signup form with validation
- **Secure Login**: Email/password authentication
- **Session Management**: Persistent user sessions
- **Password Security**: Encrypted storage
- **Role-based Access**: Different access levels

### Dashboard Functionality
- **Shipment Booking**: Comprehensive booking form
- **Real-time Tracking**: Live shipment status updates
- **Document Upload**: Secure file management
- **Invoice System**: Generate and manage invoices
- **Statistics**: Live shipment statistics

## 📋 Use Cases Implemented

### 1. Customer Books Shipment
- Complete booking form with service selection
- Document upload with validation
- Instant quote generation
- Booking reference assignment
- Admin notification system

### 2. Admin Updates Status
- Real-time status updates
- Timeline management
- Customer notifications
- Document attachments

### 3. Invoice & Payment
- Automated invoice generation
- Payment proof upload
- Admin verification workflow
- Payment confirmation

### 4. Supplier Onboarding
- Document submission
- Compliance review
- Approval workflow
- Network integration

### 5. Live Animal Shipments
- Special document requirements
- Health certificate validation
- Import permit verification
- Cage capacity confirmation

## ⚡ Performance Optimizations

- **Lazy Loading**: Images load as needed
- **Minified Assets**: CSS and JS optimized
- **Optimized Images**: WebP format with fallbacks
- **CDN Usage**: Bootstrap and Font Awesome from CDN
- **Caching Headers**: Proper cache control

## 🔧 Customization

### Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    /* ... */
}
```

### Contact Information
Update contact details in all HTML files:
- Phone numbers
- Email addresses
- Physical addresses
- Social media links

### Images
Replace images in `assets/images/`:
- Logo: `logo.png`
- Hero background: `L1.gif`
- Service images: Various .jpg files
- Team photos: `team-*.jpg`

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main` or `gh-pages`)
4. Site will be available at `https://username.github.io/repository-name`

### Manual Deployment
1. Upload all files to web server
2. Ensure server supports static file hosting
3. Configure domain if needed

## 📊 SEO Features

- **Meta Tags**: Title, description, keywords on all pages
- **Structured Data**: JSON-LD schema for organization
- **Sitemap**: Complete sitemap.xml for search engines
- **Robots.txt**: Proper search engine instructions
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt Text**: All images have descriptive alt attributes

## 🔄 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Android Chrome)

## 🛡️ Security

- **No Server Dependencies**: Pure static site
- **HTTPS Ready**: Works perfectly with SSL
- **No User Input Storage**: Contact forms are frontend-only
- **CSP Compatible**: Works with Content Security Policy

## 📈 Analytics Integration

Add Google Analytics or other tracking to `index.html` before closing `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## 📝 License

This project is proprietary to SRL-LOGIX. All rights reserved.

## 📞 Support

For technical support or questions:
- Email: srlmsocial@gmail.com
- Phone: 0789858837

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Static website with all pages
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Interactive features

### Phase 2 (Future)
- 🔄 Backend API integration
- 🔄 User authentication
- 🔄 Real shipment tracking
- 🔄 Document management system

### Phase 3 (Future)
- 🔄 Payment processing
- 🔄 Advanced analytics
- 🔄 Multi-language support
- 🔄 Mobile app integration

---

**Built with ❤️ for SRL-LOGIX**
