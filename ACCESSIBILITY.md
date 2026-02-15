# SRL-LOGIX Website - Accessibility & Structure Guide

## 🌐 **Web Accessibility Compliance**

This website is designed to meet **WCAG 2.1 Level AA** accessibility standards, ensuring inclusive access for all users.

### ✅ **Accessibility Features Implemented:**

1. **Semantic HTML Structure**
   - Proper heading hierarchy (h1 → h6)
   - Semantic elements (header, nav, main, section, footer)
   - Form labels and field associations
   - Skip links for keyboard navigation

2. **Visual Accessibility**
   - WCAG AA color contrast ratios (4.5:1 minimum)
   - Responsive typography that scales to 200%
   - Clear focus indicators for keyboard users
   - High contrast mode support

3. **Keyboard Navigation**
   - Full keyboard accessibility
   - Tab, Enter, Space, and Arrow key navigation
   - Logical tab order
   - Visible focus states

4. **Screen Reader Support**
   - ARIA labels and descriptions
   - Alt text for all meaningful images
   - Semantic markup for assistive technologies
   - Compatible with NVDA, JAWS, VoiceOver

5. **Responsive Design**
   - Mobile-optimized layouts
   - Touch-friendly interface
   - Flexible grid system
   - Consistent navigation patterns

### 🎯 **Technical Implementation:**

#### **HTML Structure:**
```html
<!-- Proper semantic structure -->
<header>
  <nav aria-label="Main navigation">
    <a href="index.html" aria-label="SRL-LOGIX Home">
      <img src="images/Logo.JPG" alt="SRL-LOGIX Logo">
    </a>
  </nav>
</header>

<main>
  <h1>Page Title</h1>
  <section aria-labelledby="section-heading">
    <h2 id="section-heading">Section Title</h2>
    <!-- Content -->
  </section>
</main>
```

#### **CSS Accessibility:**
```css
/* Focus indicators */
:focus {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

/* High contrast support */
@media (prefers-contrast: high) {
  .element {
    border: 2px solid;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

#### **JavaScript Accessibility:**
```javascript
// Keyboard event handling
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Close modals/menus
  }
  if (e.key === 'Tab') {
    // Handle focus management
  }
});

// ARIA live regions
const liveRegion = document.createElement('div');
liveRegion.setAttribute('aria-live', 'polite');
liveRegion.setAttribute('aria-atomic', 'true');
```

## 📁 **Project Structure for GitHub**

### **Optimized File Structure:**
```
windsurf-project-2/
├── images/                    # All images (moved from assets/images/)
│   ├── Logo.JPG
│   ├── Banner.JPG
│   ├── L1.gif
│   └── [all other images]
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── main.js
│       └── gallery.js
├── services/
│   ├── index.html
│   ├── consolidation/
│   │   ├── china.html
│   │   └── nigeria.html
│   └── [other service pages]
├── portals/
│   ├── agent.html
│   ├── driver.html
│   └── client.html
├── [other HTML pages]
└── index.html
```

### **Benefits of This Structure:**
1. **GitHub Pages Compatible** - Direct image access without asset folder
2. **SEO Friendly** - Clean URL structure
3. **Accessibility Compliant** - Semantic file organization
4. **Performance Optimized** - Reduced path complexity

## 🔧 **Accessibility Testing Tools Used:**

1. **Automated Testing:**
   - WAVE Web Accessibility Evaluation Tool
   - axe DevTools Extension
   - Lighthouse Accessibility Audit

2. **Manual Testing:**
   - Keyboard-only navigation
   - Screen reader testing (NVDA, VoiceOver)
   - Color contrast analysis
   - Zoom testing (200% magnification)

3. **User Testing:**
   - Accessibility user feedback
   - Assistive technology compatibility
   - Real-world usage scenarios

## 📞 **Accessibility Support:**

### **Contact for Accessibility Issues:**
- **Email:** info@srl-logix.com
- **Phone:** +27 74 566 3193
- **Response Time:** Within 24 hours

### **Feedback Process:**
1. Report accessibility barriers
2. Issue assessment and prioritization
3. Implementation timeline
4. Testing and validation
5. Resolution confirmation

## 🔄 **Ongoing Commitment:**

### **Regular Activities:**
- Monthly accessibility audits
- Quarterly user testing
- Annual WCAG compliance review
- Continuous staff training

### **Improvement Areas:**
- Enhanced mobile accessibility
- Voice navigation support
- Multi-language accessibility
- Advanced assistive technology integration

---

**Last Updated:** February 9, 2026  
**WCAG Level:** 2.1 AA  
**Review Cycle:** Quarterly  
**Contact:** info@srl-logix.com
