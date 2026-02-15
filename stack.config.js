export default {
  // Stack Auth Configuration
  projectId: process.env.STACK_PROJECT_ID || 'your-project-id',
  // For development, you can use a test project ID
  // For production, get your project ID from Stack Auth dashboard
  
  // OAuth Providers
  providers: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || 'your-google-client-id'
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || 'your-github-client-id'
    }
  },
  
  // Application URLs
  urls: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    redirectUrl: process.env.REDIRECT_URL || 'http://localhost:3000/handler/callback',
    postLoginRedirect: process.env.POST_LOGIN_REDIRECT || '/dashboard',
    postSignUpRedirect: process.env.POST_SIGNUP_REDIRECT || '/dashboard'
  },
  
  // Session Configuration
  session: {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  },
  
  // Feature Flags
  features: {
    passwordless: true,
    socialLogin: true,
    emailVerification: true,
    mfa: false // Multi-factor authentication
  },
  
  // Database Configuration (for local development)
  database: {
    type: 'sqlite', // or 'postgresql', 'mysql'
    url: process.env.DATABASE_URL || 'file:./dev.db'
  },
  
  // CORS Configuration
  cors: {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
    credentials: true
  },
  
  // Email Configuration
  email: {
    from: process.env.EMAIL_FROM || 'noreply@srl-logix.com',
    smtp: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    }
  },
  
  // Security Settings
  security: {
    bcryptRounds: 12,
    jwtSecret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production',
    sessionSecret: process.env.SESSION_SECRET || 'your-super-secret-session-key-change-in-production'
  },
  
  // Development Settings
  development: {
    logging: true,
    debugMode: true,
    mockEmail: true // Don't send real emails in development
  }
};
