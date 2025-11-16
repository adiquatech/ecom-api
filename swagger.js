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
  basePath: '/',
  components: {
    schemas: {
      Product: {
        type: 'object',
        required: ['name', 'description', 'price', 'stock', 'category'],
        properties: {
          name: { type: 'string', example: 'Wireless Mouse' },
          description: { type: 'string', example: 'Bluetooth ergonomic mouse' },
          price: { type: 'number', example: 29.99 },
          stock: { type: 'integer', example: 100 },
          category: { type: 'string', example: '60d5f3f3f3f3f3f3f3f3f3f3' },
          weight: { type: 'number', example: 85 }
        },
        example: {  
          name: 'Wireless Mouse',
          description: 'Bluetooth ergonomic mouse',
          price: 29.99,
          stock: 100,
          category: '60d5f3f3f3f3f3f3f3f3f3f3',
          weight: 85
        }
      },
      Category: {
        type: 'object',
        required: ['name'],
        properties: {
          name: { type: 'string', example: 'Electronics' },
          description: { type: 'string', example: 'Phones and gadgets' }
        },
        example: {
          name: 'Electronics',
          description: 'Phones and gadgets'
        }
      }
    }
  }
};

const outputFile = './swagger_output.json';
const endpointsFiles = [
  './routes/productRoutes.js',
  './routes/categoryRoutes.js',
];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('swagger_output.json generated successfully!');
});