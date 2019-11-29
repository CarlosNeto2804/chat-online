const EXPRESS = require('express');
const PATH = require('path');
const APP = EXPRESS();
const SERVER = require('http').createServer(APP);
require('./../configuration');
// eslint-disable-next-line no-unused-vars
const SOCKET_IO = require('socket.io')(SERVER);

APP.use(EXPRESS.static(PATH.join(__dirname, 'client')));
APP.set('views', PATH.join(__dirname, 'client'));
APP.engine('html', require('ejs').renderFile);
APP.set('views engine', 'html');
APP.use('/', (req, res) => {
  res.render('index.html');
});
SOCKET_IO.on('connection', socket => {
  console.log(`Usuario ${socket.id} conectado`);
  socket.on('sendMessage', data => {
    console.log(data);
  });
});
const PORT = process.env.PORT;
SERVER.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
