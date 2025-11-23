// routes/privacy.js
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <h1>Privacy Policy - Ecom-API</h1>
    <p>This app uses Google OAuth to authenticate users.</p>
    <p>We only access your name and email for login purposes.</p>
    <p>No data is shared or sold.</p>
    <p>For CSE341 course project.</p>
    <a href="/api-docs">Back to API Docs</a>
  `);
});

export default router;
