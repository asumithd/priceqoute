const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 4000);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/companys', require('./routes/company.routes'));
app.use('/api/price', require('./routes/price.routes'));
app.use('/api/imgs', require('./routes/img.router'));
app.use('/api/sendmail', require('./routes/email.router'));
module.exports = app;