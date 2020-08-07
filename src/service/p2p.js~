import WebSocket from 'ws';

const { P2P_PORT = 5000 } = process.env;

class P2PService {
    constructor(blockchain) { 
        this.blockchain = blockchain;
        this.socket = [];
    }

listen() {
    const server = new WebSocket.Server({ port: P2P_PORT});
    server.on('connection', (socket)) => this.onConnection(cocket));

    console.log('Service ws:${P2P_PORT} listening...');
    }

    onConnection(socket) {
        console.log('[ws:socket] connected';
            this.socket.push(socket);
    }
}

export default P2PService;
