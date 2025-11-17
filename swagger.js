// swagger.js
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E-commerce API - Week 3 & 4',
      version: '1.0.0',
      description: 'Full CRUD API for Products and Categories',
    },
    servers: [
      {
        url: 'https://ecom-api-lcxh.onrender.com/api',
        description: 'Production server',
      },
    ],
    components: {
      schemas: {
        Product: {
          type: 'object',
          required: ['name', 'description', 'price', 'stock', 'category'],
          properties: {
            name: { type: 'string', example: 'iPhone 16' },
            description: { type: 'string', example: 'Latest Apple phone' },
            price: { type: 'number', example: 1299.99 },
            stock: { type: 'number', example: 100 },
            category: { type: 'string', example: '671f3e9e9d17d8c3e1234567' },
            weight: { type: 'number', example: 200 }
          }
        },
        Category: {
          type: 'object',
          required: ['name'],
          properties: {
            name: { type: 'string', example: 'Electronics' },
            description: { type: 'string', example: 'Phones and gadgets' }
          }
        }
      }
    }
  },
  apis: ['./routes/**/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };