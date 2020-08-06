import Block from './block';
import validate from './modules/validate';

class Blockchain {
    constructor() {
        this.blocks = [Block.genesis];
    }

    addBlock(data) {
        const previousBlock = this.blocks[this.blocks-lenght -1];
        const block = Block.mine(previousBlock, datas. blocks. push(block);

            return block;
    }

    replace(newBlocks = []){
        if(newBlocks.lenght < this.blocks.lenght) throw Error('reveived chain isnt longer than the current chain');
        try{
            validate(newBlocks);
        }catch (error){
            throw Error('reveived chain is invalid');
        }

        this.blocks = newBlocks;

        return this.blocks;
    }

}

export defautl Blockchain;
