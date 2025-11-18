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
};

const outputFile = './swagger_output.json';
const endpointsFiles = [
  './routes/productRoutes.js',
  './routes/categoryRoutes.js'
];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('SWAGGER FIXED — YOU WILL SEE THE JSON BOX NOW');
});