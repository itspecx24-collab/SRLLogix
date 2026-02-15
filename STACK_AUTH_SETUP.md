# Stack Auth Integration Setup Guide

## 🚀 Quick Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Stack Auth

#### Step 1: Get Your Stack Auth Project ID
1. Go to [Stack Auth Dashboard](https://app.stack-auth.com)
2. Create a new project or use existing project ID
3. Copy your Project ID

#### Step 2: Set Up Environment Variables
```bash
# Copy the example file
cp .env.example .env

# Edit .env with your actual values
nano .env
```

#### Step 3: Update Configuration
Edit `stack.config.js` and update:
- `projectId`: Your Stack Auth project ID
- OAuth client IDs for Google/GitHub
- Database URL for production
- Security keys for production

### 3. Run Development Server
```bash
npm run dev
# or
npx @stackframe/init-stack@latest
```

## 🔧 Configuration Files

### `package.json`
- Stack Auth dependencies
- Development scripts
- Project metadata

### `stack.config.js`
- Stack Auth client configuration
- OAuth provider settings
- Database configuration
- Security settings

### `.env.example`
- Environment variable template
- All required configuration options
- Security keys for production

## 🎯 Features Implemented

### Authentication Methods
- **Email/Password**: Traditional login and registration
- **OAuth**: Google and GitHub authentication
- **Social Login**: One-click social authentication

### User Management
- **Registration**: Complete signup with validation
- **Login**: Secure authentication with session management
- **Profile Management**: User data storage and retrieval
- **Document Upload**: File handling for business users

### Security Features
- **Session Management**: Secure token-based sessions
- **Password Validation**: Strong password requirements
- **CSRF Protection**: Built-in security measures
- **OAuth Security**: Secure token handling

## 📱 User Interface

### Authentication Pages
- **Modern Design**: Qabula styling with glass effects
- **Responsive**: Mobile-first design approach
- **Interactive**: Real-time validation and feedback
- **Accessible**: WCAG compliant design

### Components
- **Login Form**: Email/password authentication
- **Registration Form**: Complete user signup
- **OAuth Buttons**: Google and GitHub integration
- **Document Upload**: Drag-and-drop file handling
- **Error Handling**: User-friendly error messages

## 🔐 Security Configuration

### Development Environment
```javascript
// Use test project ID for development
projectId: 'test-project-id'
```

### Production Environment
```javascript
// Use your actual project ID
projectId: 'your-production-project-id'
```

### OAuth Provider Setup
1. **Google OAuth**:
   - Go to Google Cloud Console
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs

2. **GitHub OAuth**:
   - Go to GitHub Developer Settings
   - Create OAuth App
   - Configure callback URLs

## 🚀 Deployment

### Environment Variables
Set these in your hosting environment:
- `STACK_PROJECT_ID`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `JWT_SECRET`
- `SESSION_SECRET`

### Database Setup
For production, configure:
- PostgreSQL or MySQL database
- Connection string in `DATABASE_URL`
- Run migrations for Stack Auth tables

## 📚 API Integration

### Stack Auth Client
```javascript
import { StackClient } from '@stackframe/stack';

const client = new StackClient({
  projectId: 'your-project-id',
  baseUrl: 'https://your-domain.com',
  redirectUrl: 'https://your-domain.com/handler/callback'
});
```

### Authentication Methods
```javascript
// Email/Password
await client.signInWithPassword({ email, password });
await client.signUpWithPassword({ email, password, profileData });

// OAuth
await client.signInWithOAuth({ provider: 'google', type: 'sign-in' });
await client.signUpWithOAuth({ provider: 'github', type: 'sign-up' });

// User Management
const user = await client.getUser();
await client.updateUser({ profileData });
```

## 🧪 Testing

### Local Testing
1. Start development server: `npm run dev`
2. Navigate to `http://localhost:3000`
3. Test registration and login flows
4. Verify OAuth redirects

### OAuth Testing
1. Test Google OAuth flow
2. Test GitHub OAuth flow
3. Verify user profile creation
4. Test session persistence

## 🔄 Migration from LocalStorage

### Data Migration
```javascript
// Migrate existing users to Stack Auth
const existingUsers = JSON.parse(localStorage.getItem('srl_users') || []);

for (const user of existingUsers) {
  await client.signUpWithPassword({
    email: user.email,
    password: user.password,
    firstName: user.firstName,
    lastName: user.lastName,
    profileData: {
      company: user.company,
      phone: user.phone,
      userType: user.userType
    }
  });
}
```

### Session Migration
- Stack Auth handles sessions automatically
- No manual session management needed
- Improved security with token-based auth

## 🛠️ Troubleshooting

### Common Issues
1. **Import Errors**: Ensure Stack Auth is installed
2. **OAuth Failures**: Check redirect URLs in provider settings
3. **Database Errors**: Verify connection string and permissions
4. **CORS Issues**: Configure allowed origins

### Debug Mode
Enable debug mode in `stack.config.js`:
```javascript
development: {
  logging: true,
  debugMode: true
}
```

## 📞 Support

### Stack Auth Documentation
- [Stack Auth Docs](https://docs.stack-auth.com)
- [API Reference](https://api.stack-auth.com)
- [Community Forum](https://community.stack-auth.com)

### Get Help
- Stack Auth Discord: https://discord.gg/stack-auth
- GitHub Issues: https://github.com/stack-auth/stack-auth/issues
- Email Support: support@stack-auth.com

## 🔒 Security Best Practices

### Production Checklist
- [ ] Use environment variables for secrets
- [ ] Enable HTTPS in production
- [ ] Configure secure cookies
- [ ] Set appropriate session timeouts
- [ ] Enable rate limiting
- [ ] Monitor authentication logs
- [ ] Regular security updates

### Recommended Settings
```javascript
security: {
  bcryptRounds: 12,
  sessionMaxAge: 60 * 60 * 24, // 7 days
  secureCookies: true,
  sameSitePolicy: 'lax'
}
```

---

## 🎉 Next Steps

1. **Setup Stack Auth**: Follow the quick setup instructions
2. **Configure OAuth**: Set up Google and GitHub providers
3. **Test Authentication**: Verify all login flows work
4. **Deploy to Production**: Configure production environment
5. **Monitor Performance**: Track authentication metrics

For additional support, refer to the Stack Auth documentation or contact the development team.
