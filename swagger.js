// swagger.js  ← DELETE OLD, PASTE THIS 100%
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Fix for ES modules __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E-commerce API - Week 3 & 4',
      version: '1.0.0',
      description: 'Full CRUD API for Products and Categories',
    },
    servers: [{ url: 'https://ecom-api-lcxh.onrender.com/api' }],
    components: {
      schemas: {
        Product: {
          type: 'object',
          required: ['name', 'description', 'price', 'stock', 'category'],
          properties: {
            name: { type: 'string', example: 'MacBook Pro' },
            description: { type: 'string', example: 'M3 Pro chip' },
            price: { type: 'number', example: 2499.99 },
            stock: { type: 'integer', example: 25 },
            category: { type: 'string', example: '671f3e9e9d17d8c3e1234567' },
            weight: { type: 'number', example: 1500 }
          }
        },
        Category: {
          type: 'object',
          required: ['name'],
          properties: {
            name: { type: 'string', example: 'Laptops' },
            description: { type: 'string', example: 'High-end laptops' }
          }
        }
      }
    }
  },
  // THIS IS THE ONLY PATH THAT WORKS ON RENDER
  apis: [
    join(__dirname, 'routes', 'productRoutes.js'),
    join(__dirname, 'routes', 'categoryRoutes.js')
  ],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };