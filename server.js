const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const studentsRouter = require('./api/students/students-router.js');
const messagesRouter = require('./api/messages/messages-router.js');
const ProjectsRouter = require('./api/projects/projects-router.js');
const authRouter = require('./api/auth/auth-router');

const server = express();


server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/students', studentsRouter);
server.use('/api/messages', messagesRouter);
server.use('/api/projects', ProjectsRouter);

module.exports = server;
