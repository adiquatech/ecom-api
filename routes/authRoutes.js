// routes/authRoutes.js
import express from 'express';
import passport from '../config/passport.js';

const router = express.Router();

// Login page with links to Google OAuth and Swagger UI
router.get('/login', (req, res) => {
  res.send(`
    <h1>E-commerce API - Login</h1>
    <p><a href="/api/auth/google">Login with Google</a></p>
    <p><a href="/api-docs">Go to Swagger UI</a></p>
  `);
});

// Logout page that ends the session and provides links to login and Swagger UI
router.get('/logout', (req, res) => {
  req.logout(() => {
    req.session.destroy(() => {
      res.send(`
        <h1>Logged Out Successfully</h1>
        <p><a href="/api/auth/login">Login Again</a></p>
        <p><a href="/api-docs">Back to Swagger</a></p>
      `);
    });
  });
});

// Existing routes
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
