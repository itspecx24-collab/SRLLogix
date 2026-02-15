# SRL-LOGIX Client Portal Overview

Welcome to the SRL-LOGIX Client Portal - your comprehensive logistics management platform.

## Quick Start

### 1. Access the Portal
Navigate to the Client Portal at `/client.html` to access the login and registration system.

### 2. Register or Sign In
- **New Users**: Complete the registration form with company details
- **Existing Users**: Sign in with your email and password

### 3. Access Your Dashboard
After successful login, you'll be redirected to your personalized dashboard at `/dashboard.html`

## Portal Features

### Core Functionality
- **Shipment Booking**: Create new shipment requests with detailed specifications
- **Real-time Tracking**: Monitor your shipments throughout their journey
- **Document Management**: Upload and manage shipping documents securely
- **Invoice Management**: View, download, and pay invoices online
- **Status Updates**: Receive real-time notifications about shipment status changes

### Dashboard Components
- **Statistics Overview**: Active shipments, in-transit items, completed orders
- **Recent Shipments Table**: Quick access to all your recent bookings
- **Quick Actions**: One-click access to common tasks
- **User Profile**: Manage your account settings and preferences

## Use Cases Implementation

### Use Case 1: User Books Shipment
**Actor**: Registered Customer

**Precondition**: User is logged in to the portal

**Workflow**:
1. User clicks "Book Shipment" from dashboard
2. System displays comprehensive booking form with:
   - Service type selection (Air, Sea, Road, Consolidation)
   - Cargo type specification (General, Perishable, Dangerous, Live Animals)
   - Origin and destination details
   - Weight and dimensions
   - Pickup date requirements
   - Special requirements field
   - Document upload capability
3. User inputs shipment details
4. User uploads required documents
5. System generates instant quote based on specifications
6. System assigns unique booking reference (SRL-2024-XXXX)
7. Admin receives automatic notification via email/system
8. User receives confirmation with booking reference

**Postcondition**: Booking recorded in system, visible in user's dashboard

### Use Case 2: Admin Updates Shipment Status
**Actor**: Operations Admin

**Workflow**:
1. Admin logs into admin portal
2. Admin views pending bookings list
3. Admin selects specific booking (e.g., SRL-2024-0156)
4. Admin updates shipment status:
   - Pending → Confirmed
   - Confirmed → In Transit
   - In Transit → Customs Clearance
   - Customs Clearance → Delivered
5. Admin adds notes or additional documents
6. System updates customer timeline in real-time
7. Customer receives instant notification via email/SMS
8. Dashboard reflects updated status immediately

**Postcondition**: Customer dashboard shows updated shipment status

### Use Case 3: Invoice Generation & Payment
**Actor**: Admin / Customer

**Workflow**:
1. Admin generates invoice from completed booking
2. System sends invoice to customer email
3. Customer uploads proof of payment through portal
4. Admin verifies payment details and documents
5. Admin marks invoice as paid in system
6. System updates shipment status to "Cleared for Dispatch"
7. Customer receives payment confirmation

**Postcondition**: Payment confirmed and shipment progresses to next stage

### Use Case 4: Supplier Onboarding
**Actor**: Supplier

**Workflow**:
1. Supplier accesses supplier registration portal
2. Supplier submits company documents:
   - Business registration
   - Tax clearance certificates
   - Insurance certificates
   - Compliance documentation
3. Admin reviews compliance requirements
4. Admin performs background verification
5. Admin approves or rejects supplier application
6. Approved suppliers become available in sourcing system
7. Supplier receives notification and access credentials

**Postcondition**: Supplier integrated into logistics network

### Use Case 5: Live Animal Shipment Booking
**Actor**: Customer

**Additional Validation Requirements**:
- Health certificate from veterinary authority
- Import permit from destination country
- Cage capacity confirmation and specifications
- Temperature control requirements
- Special handling instructions

**System Validation**:
- Blocks submission without mandatory documents
- Validates document authenticity and expiry
- Ensures cage specifications meet animal welfare standards
- Requires 24-48 hour verification process
- Auto-notifies customer on approval/rejection

**Special Features**:
- Priority handling for live animal shipments
- Real-time temperature monitoring (if applicable)
- Specialized carrier assignment
- Enhanced tracking and status updates

## Technical Implementation

### Authentication System
- **Session Management**: Secure token-based authentication
- **Password Security**: Encrypted storage with salted hashing
- **Multi-factor Authentication**: Optional 2FA for enhanced security
- **Role-based Access**: Different access levels for customers, admins, and suppliers

### Document Management
- **File Upload**: Support for PDF, DOC, DOCX, JPG, PNG formats
- **File Size Limits**: Maximum 10MB per document
- **Virus Scanning**: Automatic security scanning of uploaded files
- **Document Validation**: Format and size validation before upload

### Notification System
- **Email Notifications**: Automated email alerts for status changes
- **SMS Alerts**: Optional SMS notifications for critical updates
- **In-app Notifications**: Real-time dashboard notifications
- **Push Notifications**: Mobile app notifications (future feature)

### Data Security
- **SSL Encryption**: All data transmitted over secure HTTPS
- **Data Backup**: Regular automated backups of all user data
- **Access Logs**: Comprehensive audit trail of all activities
- **GDPR Compliance**: Full compliance with data protection regulations

## API Integration

### External Services
- **Payment Gateways**: Integration with multiple payment processors
- **Tracking APIs**: Real-time tracking from shipping carriers
- **Customs Systems**: Integration with customs clearance systems
- **Email Services**: Transactional email delivery service

### Webhook Support
- **Status Updates**: Real-time webhook notifications for external systems
- **Document Processing**: Automated document processing workflows
- **Payment Confirmation**: Instant payment status updates

## Mobile Responsiveness

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Enhanced experience for tablet users
- **Desktop Features**: Full-featured desktop experience
- **Cross-Browser**: Compatible with all modern browsers

### Mobile Features
- **Touch-Friendly**: Optimized touch interactions
- **Offline Support**: Limited offline functionality
- **Push Notifications**: Mobile push notification support
- **Biometric Login**: Fingerprint/Face ID authentication (future)

## Support & Help

### Customer Support
- **24/7 Support**: Round-the-clock customer service
- **Live Chat**: In-app chat support for immediate assistance
- **Knowledge Base**: Comprehensive documentation and tutorials
- **Video Guides**: Step-by-step video tutorials

### Training Resources
- **User Manuals**: Detailed user documentation
- **Webinars**: Regular training sessions
- **Onboarding**: Personalized onboarding for new clients
- **FAQ Section**: Common questions and answers

## Future Enhancements

### Planned Features
- **Mobile Apps**: Native iOS and Android applications
- **AI Integration**: Smart routing and predictive analytics
- **Blockchain**: Enhanced supply chain transparency
- **IoT Integration**: Real-time sensor data integration

### System Improvements
- **Performance Optimization**: Faster load times and responsiveness
- **Advanced Analytics**: Enhanced reporting and insights
- **Multi-language Support**: International language options
- **Currency Support**: Multi-currency payment processing

---

## Getting Started

1. **Register**: Visit `/client.html` to create your account
2. **Verify**: Check your email for account verification
3. **Login**: Sign in with your credentials
4. **Explore**: Navigate your dashboard and explore features
5. **Book**: Create your first shipment booking
6. **Track**: Monitor your shipments in real-time

For technical support or questions, contact our support team at `srlmsocial@gmail.com` or call `0789858837`.

---

*Last Updated: February 2024*
