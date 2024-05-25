import { createServer } from 'http';
import router from '../routes/index.js';

const server = createServer((req, res) => {
    router(req, res);
});

export default server;
