import PKG from './package.json';
import Block from './src/blochain/block'

const {name, version } = PKG;

console.log('${name} v${version}');

const block = new Block (Date.now(), 'private hash', 'hash', 'data');
console.log(block.toString()) 
