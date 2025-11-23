// routes/authRoutes.js
import express from 'express';
import passport from '../config/passport.js';

const router = express.Router();

// Login page with links to Google OAuth and Swagger UI
router.get('/login', (req, res) => {
  res.send(`
    <h1>E-commerce API - Login Successfully</h1>
    <p><a href="/api/auth/google">Login with Google</a></p>
    <p><a href="/api-docs">Go to Swagger UI</a></p>
  `);
});

// Logout page that ends the session and provides links to login and Swagger UI
router.get('/logout', (req, res) => {
  req.logout({ keepSessionInfo: false }, () => {
    req.session.destroy(() => {
      res.clearCookie('connect.sid', {
        path: '/',
        domain: '.onrender.com',
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
      });

      res.send(`
        <h1>Logged Out Successfully</h1>
        <p>You are now fully logged out.</p>
        <script>
          localStorage.clear();
          sessionStorage.clear();
          setTimeout(() => { location.href = '/api-docs'; }, 800);
        </script>
        <p>Redirecting in 1 second...</p>
        
      `);
    });
  });
});
//<p><a href="/api/auth/login">Login Again</a></p>
//<p><a href="/api-docs">Go to Swagger UI</a></p>

// Google routes
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/api/auth/login' }),
  (req, res) => {
    res.redirect('/api-docs');
  }
);

export default router;
