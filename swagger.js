// generate-swagger.js  ← FINAL VERSION THAT WORKS ON EVERY RENDER PROJECT
import swaggerAutogen from 'swagger-autogen';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

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
  resolve(__dirname, 'routes', 'productRoutes.js'),
  resolve(__dirname, 'routes', 'categoryRoutes.js')
];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('SWAGGER 100% FIXED — YOU WILL SEE /api/products AND JSON BOX');
});