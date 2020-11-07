const mongoose = require('mongoose');
const express = require('express');
const cookieSession = require('cookie-session');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const ApiRouter = require('./routes/api');
const AccountRouter = require('./routes/account');
const isAuthenticated = require('./middlewares/isAuthenticated');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cw-lite';
const port = process.env.PORT || 3000;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static('dist'));
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
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
  return res;
});

app.get('/favicon.ico', (_, res) => res.status(404).send());
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// app.listen(port, () => {
//   // eslint-disable-next-line no-console
//   console.log(`listening on ${port}`);
// });

io.on('connection', (socket) => {
  console.log('a user is connected');

  socket.on('disconnect', () => {
    console.log('user is disconnected');
  });

  socket.on('req', (data) => {
    console.log(data);
    socket.emit('res', 'hey back');
  });
});

server.listen(port);
