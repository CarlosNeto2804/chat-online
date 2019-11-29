const EXPRESS = require('express');
const PATH = require('path');
const APP = EXPRESS();
const SERVER = require('http').createServer(APP);
// eslint-disable-next-line no-unused-vars
const SOCKET_IO = require('socket.io')(SERVER);

APP.use(EXPRESS.static(PATH.join(__dirname, 'client')));
APP.set('views', PATH.join(__dirname, 'public'));
APP.engine('html', require('ejs').renderFile);
APP.set('views engine', 'html');
