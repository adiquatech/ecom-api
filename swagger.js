// swagger.js
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E-commerce API - Week 3 & 4',
      version: '1.0.0',
      description: 'Full CRUD API with Google OAuth (Session-based)',
    },
    servers: [
      { url: 'https://ecom-api-lcxh.onrender.com/api' },
      { url: 'http://localhost:3000/api' },
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: 'apiKey',
          in: 'cookie',
          name: 'connect.sid',
        },
      },
    },
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
