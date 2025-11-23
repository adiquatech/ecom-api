// swagger.js
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E-commerce API - Week 3 & 4',
      version: '1.0.0',
      description: 'Full CRUD API for 2 collections Products and Categories',
    },
    servers: [
      { url: 'https://ecom-api-lcxh.onrender.com/api' },
      { url: 'http://localhost:3000/api' },
    ],

    components: {
      securitySchemes: {
        googleOAuth2: {
          type: 'oauth2',
          flows: {
            authorizationCode: {
              authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
              tokenUrl: 'https://oauth2.googleapis.com/token',
              scopes: {
                openid: 'OpenID Connect',
                email: 'View your email',
                profile: 'View your profile',
              },
            },
          },
        },
      },
    },
    security: [{ googleOAuth2: ['openid', 'email', 'profile'] }],
  },
  apis: [
    './routes/productRoutes.js',
    './routes/categoryRoutes.js',
    './routes/authRoutes.js',
  ],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
export { swaggerUi };
