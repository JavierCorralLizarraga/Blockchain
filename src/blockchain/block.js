import { SHA256 } from 'crypto-js';

class Block {
    constructor(timestamp, previousHash, hash, data){
        this.timestamp=timestamp;
        this.previusHash=previousHash;
        this.hash=hash;
        this.data=data;
    }


    static get genesis(){
        const timestamp = (new Date(2000, 0, 1)).getTime();
        return new this(timestamp, undefined, 'genesis hash', 'data');
    }


    static mine(previousBlock, data){
        const timestamp=Date.now();
        const { hash:previousHash} = previousBlock;
        const hash=Block.hash(timestamp, previousHash, data);

        return new this(timestamp, previousHash, hash, data);
    }

    static hash(timestamp, previousHash, data){
        return SHA256('${timestamp}${previousHash}${data}').toString();
    } 



    to string(){
        const {timestamp, previousHash, hash, data,}=this;
        return 'Block - 
            timestamp:${timestamp}
            previousHash:${previousHash}
            hash:${hash}
            data:${data}
        ';
    }
}
export default Block;

