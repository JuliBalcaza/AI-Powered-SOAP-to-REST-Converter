import server from './server/server.js';
import { hostname, port } from './server/config.js';

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
