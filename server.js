dotenv.config();
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import './models/index.js';
import { attachResponseHelpers } from './utils/utils.js';
import routes from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger_output.json'with { type: 'json' };


const app = express();
app.use(express.json());
app.use(attachResponseHelpers);

// Home route
app.get('/', (req, res) => {
  res.send('E-commerce API - Week 3 and 4');
});

// Api Routes
app.use('/api', routes);

//Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


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



