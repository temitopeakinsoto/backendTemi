const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mw = require('./api/helpers/middleware');


const studentsRouter = require('./api/students/students-router.js');
const messagesRouter = require('./api/messages/messages-router.js');
const ProjectsRouter = require('./api/projects/projects-router.js');
const authRouter = require('./api/auth/auth-router');

const server = express();


server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/students', mw.restricted, studentsRouter);
server.use('/api/messages', mw.restricted, messagesRouter);
server.use('/api/projects', mw.restricted, ProjectsRouter);

module.exports = server;
