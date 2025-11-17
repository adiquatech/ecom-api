// generate-swagger.js  
import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'E-commerce API - Week 3 & 4',
    description: 'Full CRUD API for Products and Categories',
    version: '1.0.0',
  },
  host: 'ecom-api-lcxh.onrender.com',
  schemes: ['https'],
  basePath: '/api',

  components: {
    schemas: {
      Product: {
        type: 'object',
        required: ['name', 'description', 'price', 'stock', 'category'],
        properties: {
          name: { type: 'string', example: 'iPhone 16 Pro Max' },
          description: { type: 'string', example: 'Latest Apple flagship' },
          price: { type: 'number', example: 1599.99 },
          stock: { type: 'integer', example: 50 },
          category: { type: 'string', example: '671f3e9e9d17d8c3e1234567' },
          weight: { type: 'number', example: 240 }
        },
        example: {                   
          name: 'iPhone 16 Pro Max',
          description: 'Latest Apple flagship',
          price: 1599.99,
          stock: 50,
          category: '671f3e9e9d17d8c3e1234567',
          weight: 240
        }
      },
      Category: {
        type: 'object',
        required: ['name'],
        properties: {
          name: { type: 'string', example: 'Smartphones' },
          description: { type: 'string', example: 'Mobile phones' }
        },
        example: {                  
          name: 'Smartphones',
          description: 'Mobile phones and accessories'
        }
      }
    },

    requestBodies: {
      ProductRequest: {
        description: 'Product data',
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/Product' }
          }
        }
      },
      CategoryRequest: {
        description: 'Category data',
        required: true,
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/Category' }
          }
        }
      }
    }
  }
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('Swagger documentation generated successfully.');
});