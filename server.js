const mongoose = require('mongoose');
const express = require('express');
const cookieSession = require('cookie-session');

const ApiRouter = require('./routes/api');
const AccountRouter = require('./routes/account');
const isAuthenticated = require('./middlewares/isAuthenticated');

const app = express();
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cw-lite';
const port = process.env.PORT || 3000;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.use(
  cookieSession({
    name: 'local-session',
    keys: ['spooky'],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  }),
);

app.get('/', (req, res) => res.send('in here'));

app.use('/api', ApiRouter);
app.use('/account', AccountRouter);
app.use(isAuthenticated);
// app.use((err, req, res, next) => {
//   if (res.headersSent) {
//     return next(err);
//   }
//   res.status(500);
//   res.render('error', { error: err });
//   return res;
// });

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
