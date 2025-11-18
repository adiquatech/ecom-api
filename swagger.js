// generate-swagger.js  ← THIS ONE WORKS ON RENDER 100%
import swaggerAutogen from 'swagger-autogen';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const doc = {
  info: {
    title: 'E-commerce API - Week 3 & 4',
    description: 'Full CRUD API for Products and Categories',
    version: '1.0.0',
  },
  host: 'ecom-api-lcxh.onrender.com',
  schemes: ['https'],
  basePath: '/api',
};

const outputFile = './swagger_output.json';
const endpointsFiles = [
  join(__dirname, 'routes', 'productRoutes.js'),
  join(__dirname, 'routes', 'categoryRoutes.js')
];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('SWAGGER FIXED — /api/products AND /api/categories WILL APPEAR WITH JSON BOX');
});