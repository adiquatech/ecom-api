dotenv.config();
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import './models/index.js';
import { attachResponseHelpers } from './utils/utils.js';
import routes from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';
import swaggerSpec, { swaggerUi } from './swagger.js';
import { createRequire } from 'module';

import cors from 'cors';

const app = express();

const require = createRequire(import.meta.url);
const swaggerDocument = require('./swagger_output.json');


app.use(express.json());
app.use(attachResponseHelpers);
app.use(cors({ origin: '*' }));

// Home route
app.get('/', (req, res) => {
  res.send('E-commerce API - Week 3 and 4');
});

// Api Routes
app.use('/api', routes);
app.use(cors());

//Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`EcomAPI running on http://localhost:${PORT}`);
    });

  } catch (err){
    console.error('Server failed to start:', err.message);
    process.exit(1);
  }
};


startServer();



