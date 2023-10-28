import express, { Request, Response } from 'express';

const server = express();

function handleRequest(request: Request, response: Response) {
    response.sendFile(__dirname + './index.html');
}

server.get('/', handleRequest);

server.listen(3000)

