require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors=require('cors')
const path = require('path');
const Constants =require('./config/constants')

const app = express();

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const Routes = require('./routes/apiRoutes');
const applyJwtMiddleware =require('./middleware/applyJwtMiddleware')
app.use(morgan('dev'));

app.use(express.json());
app.use(cors());

const PORT = 3000;

mongoose
  .connect('mongodb://127.0.0.1:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.json());
const swaggerOption = {
  swaggerDefinition: {
    info: {
      title: Constants.Swagger.TITTLE,
      description: Constants.Swagger.DESCRIPTION,
      contact: {
        name: Constants.Swagger.CONTACTNAME,
      },
      servers:Constants.Swagger.SERVERS,
    },
    securityDefinitions: {
      bearerAuth: {
        type: Constants.Swagger.TYPE,
        name: Constants.Swagger.BEARERAUTH_NAME,
        in: Constants.Swagger.IN,
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: Constants.Swagger.APIS,
};

const swaggerDocs = swaggerJsdoc(swaggerOption)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(applyJwtMiddleware)

app.use('/api', Routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
