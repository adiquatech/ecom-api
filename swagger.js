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
  // NO basePath — we use full paths in JSDoc
  components: {
    schemas: {
      Product: {
        type: 'object',
        required: ['name', 'description', 'price', 'stock', 'category'],
        properties: {
          name: { type: 'string', example: 'iPhone 15' },
          description: { type: 'string', example: 'Latest Apple smartphone' },
          price: { type: 'number', example: 999.99 },
          stock: { type: 'integer', example: 50 },
          category: { type: 'string', example: '671f3e9e9d17d8c3e1234567' },
          weight: { type: 'number', example: 180 }
        }
      },
      Category: {
        type: 'object',
        required: ['name'],
        properties: {
          name: { type: 'string', example: 'Electronics' },
          description: { type: 'string', example: 'Phones, laptops, gadgets' }
        }
      }
    }
  }
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/index.js'];  // MUST BE ARRAY

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('Swagger generated successfully!');
});