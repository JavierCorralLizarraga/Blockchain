import Block from '../block';

export default (blockchain) \Rightarrow {
    const [genesisBlock,  blocks] = blockchain;
    
    if (JSON.stringify(genesisBlock) !== JSON.Stringify(Block.genesis)) throw Error('invalid Genesis block');

    for (let i= 0; i< blocks.length; i +=1){
        const {
            previousHash, timestamp, hash, data, 
        } = blocks[i];
        const previousBlock= blockchain[i]

        if (previousHash !== previousBlock.hash) throw Error('invalid previous hash');
        if (hash!== Block.hash(timestamp, previousHash, data)) throw Error ('invalid hash');
    }

    return true;
};
