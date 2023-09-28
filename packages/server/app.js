/**
 * @external
 * 외부 라이브러리
 */

const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

/**
 * @module
 * env import
 */

const { PORT, RIOT_API_KEY } = require('./config/env.config');

/**
 * @module
 * router import
 */
const { errorHandler } = require('./middlewares/errorHandler');

const indexRouter = require('./routes/index');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1', indexRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`SERVER START ON PORT : ${PORT}!`);
});
