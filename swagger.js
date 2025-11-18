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
    servers: [{ url: 'https://ecom-api-lcxh.onrender.com/api' }],
  },
  apis: ['./routes/productRoutes.js', './routes/categoryRoutes.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
export { swaggerUi };