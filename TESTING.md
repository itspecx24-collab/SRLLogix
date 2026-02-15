# Testing Guide for SRL-LOGIX Website

## 🚀 Quick Testing Methods

### Method 1: Live Server (Recommended)
Install and run a local development server:

```bash
# Option A: Using Node.js (if you have Node.js installed)
npm install -g live-server
cd c:/Users/xabis/CascadeProjects/windsurf-project-2
live-server

# Option B: Using Python (if you have Python installed)
cd c:/Users/xabis/CascadeProjects/windsurf-project-2
# For Python 3.x
python -m http.server 8000
# For Python 2.x
python -m SimpleHTTPServer 8000

# Option C: Using PHP (if you have PHP installed)
cd c:/Users/xabis/CascadeProjects/windsurf-project-2
php -S localhost:8000
```

Then open your browser and navigate to:
- `http://localhost:8000` (for Python/PHP)
- `http://127.0.0.1:8080` (for live-server)

### Method 2: VS Code Live Server Extension
1. Install the **Live Server** extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Website opens automatically in your browser

### Method 3: Direct File Opening (Limited Testing)
Double-click `index.html` to open in browser
⚠️ **Note**: This method has limitations and may not work properly for all features

## 🧪 Testing Checklist

### ✅ Basic Functionality Tests

#### 1. Navigation Testing
- [ ] All navigation links work correctly
- [ ] Dropdown menus open and close properly
- [ ] Mobile menu toggles correctly
- [ ] Active page highlighting works
- [ ] Back to top button functions

#### 2. Page Loading Tests
- [ ] All pages load without errors
- [ ] Images display correctly (check all 68 images)
- [ ] CSS styles apply properly
- [ ] JavaScript functions execute without errors
- [ ] Console shows no errors (F12 → Console tab)

#### 3. Responsive Design Tests
- [ ] Desktop view (1920x1080) works correctly
- [ ] Tablet view (768x1024) works correctly
- [ ] Mobile view (375x667) works correctly
- [ ] Text is readable on all devices
- [ ] Touch targets are large enough on mobile

### 🔐 Portal Authentication Tests

#### 4. Client Portal (`client.html`)
- [ ] Registration form validation works
- [ ] Login form validation works
- [ ] Form submission shows loading states
- [ ] Success messages display correctly
- [ ] Password field shows/hides properly

#### 5. Dashboard (`dashboard.html`)
- [ ] Statistics cards display correctly
- [ ] Recent shipments table loads
- [ ] Quick action buttons work
- [ ] Booking modal opens and closes
- [ ] Form validation in booking modal

### 📋 Use Case Testing

#### 6. Shipment Booking Flow
1. Go to `client.html`
2. Register a new account (test@test.com / password123)
3. Login with credentials
4. Navigate to dashboard
5. Click "Book Shipment"
6. Fill out the booking form:
   - Service Type: Air Freight
   - Cargo Type: General Cargo
   - Origin: Johannesburg, South Africa
   - Destination: Lagos, Nigeria
   - Weight: 100
   - Dimensions: 100×50×50
   - Pickup Date: Tomorrow's date
7. Submit the form
8. Verify success message appears

#### 7. Live Animal Shipment Test
1. In booking modal, select "Live Animals" as cargo type
2. Verify special requirements field auto-populates
3. Verify field gets red border
4. Try to submit without required documents
5. Verify validation blocks submission

#### 8. Document Upload Test
1. In booking modal, click "Choose Files"
2. Select a PDF or image file
3. Verify file name appears
4. Verify file size validation works (try >10MB file)

### 🎨 Design & Styling Tests

#### 9. Qabula Design Consistency
- [ ] Navy color (#0b2545) applied correctly
- [ ] Lemon accent (#ffdd57) used appropriately
- [ ] Teal color (#0ea58b) applied correctly
- [ ] Glass navigation effect works
- [ ] Hover states and transitions smooth

#### 10. Typography & Icons
- [ ] Inter font loads correctly
- [ ] Bootstrap Icons display properly
- [ ] Text hierarchy is clear
- [ ] All icons are visible and aligned

### 📱 Cross-Browser Testing
Test in multiple browsers:
- [ ] Google Chrome (latest)
- [ ] Mozilla Firefox (latest)
- [ ] Microsoft Edge (latest)
- [ ] Safari (if available)

### 📄 Page-Specific Tests

#### 11. Homepage (`index.html`)
- [ ] Hero video/background loads
- [ ] Service cards display correctly
- [ ] Statistics counters animate
- [ ] Testimonials section works
- [ ] Contact form functions

#### 12. About Page (`about.html`)
- [ ] Hero section displays correctly
- [ ] Mission/Vision cards work
- [ ] Statistics counters function
- [ ] CTA buttons work

#### 13. Services Page (`services/index.html`)
- [ ] Service cards display correctly
- [ ] Dropdown navigation works
- [ ] Links to individual services work
- [ ] Hero section loads properly

#### 14. Contact Page (`contact.html`)
- [ ] Contact form validation works
- [ ] Map displays correctly
- [ ] FAQ accordion functions
- [ ] Contact info cards display

## 🐛 Common Issues & Solutions

### Issue 1: Images Not Loading
**Problem**: Images show broken or don't display
**Solution**: 
- Check image paths in HTML files
- Verify images exist in `/images/` folder
- Ensure case sensitivity matches (Windows is case-insensitive, GitHub is case-sensitive)

### Issue 2: CSS Not Applying
**Problem**: Styles look broken or missing
**Solution**:
- Check CSS file path: `assets/css/style.css`
- Verify Bootstrap CSS is loading
- Check browser console for CSS errors

### Issue 3: JavaScript Errors
**Problem**: Interactive features not working
**Solution**:
- Open browser console (F12)
- Check for JavaScript errors
- Verify jQuery/Bootstrap are loaded before custom scripts

### Issue 4: Navigation Dropdowns Not Working
**Problem**: Dropdown menus don't open
**Solution**:
- Ensure Bootstrap JS is loaded
- Check Bootstrap version compatibility
- Verify dropdown HTML structure is correct

### Issue 5: Forms Not Submitting
**Problem**: Contact/booking forms don't work
**Solution**:
- Check form validation
- Verify JavaScript event listeners
- Check for console errors

## 📊 Performance Testing

### Load Time Testing
1. Open browser DevTools (F12)
2. Go to Network tab
3. Refresh page
4. Check load times:
   - HTML: < 100ms
   - CSS: < 200ms
   - JS: < 300ms
   - Images: < 500ms each

### Mobile Performance
1. Use Chrome DevTools device emulation
2. Test on different device sizes
3. Check touch interactions
4. Verify performance on slower connections

## 🔍 Debugging Tools

### Browser Console
- **Chrome**: F12 → Console tab
- **Firefox**: F12 → Console tab
- **Edge**: F12 → Console tab

### Network Tab
- Check failed requests
- Verify file loading
- Monitor response times

### Element Inspector
- Check CSS applied to elements
- Debug layout issues
- Test responsive breakpoints

## 🚀 Deployment Testing

### GitHub Pages Testing
1. Push changes to GitHub
2. Wait 5-10 minutes for deployment
3. Visit `https://srllogix.github.io`
4. Test all functionality again
5. Check for any console errors

### Final Checklist Before Going Live
- [ ] All pages load without errors
- [ ] All links work correctly
- [ ] Forms submit properly
- [ ] Images display correctly
- [ ] Mobile responsive design works
- [ ] No console errors
- [ ] Performance is acceptable
- [ ] Cross-browser compatibility confirmed

## 📞 Support During Testing

If you encounter issues during testing:
1. Check browser console for errors
2. Verify file paths and names
3. Test in different browsers
4. Check internet connection
5. Clear browser cache

For additional support, refer to the documentation in `/docs/overview.md` or contact the development team.

---

*Last Updated: February 2024*
