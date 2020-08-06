import PKG from './package.json';
import Block from './src/blochain/block'

const {name, version } = PKG;

console.log('${name} v${version}');
const {genesis}=Block;

const block1 = Block.mine(genesis, 'data_1');
console.log(block1.toString());

const block2 =Block.mine(block1, 'data_2');
console.log(block2.toString());

