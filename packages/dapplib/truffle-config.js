require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'good enter bottom solution finger deliver remain quality gesture hero foster giant'; 
let testAccounts = [
"0xf84f1c0672d7fe456ec95c2732a4cca31a0abd5276727480a197ad816bce2b6f",
"0x31307f2f58ef8ddcdf8673f5728aec6fdd7c8a203196f6705cf46589f8b6e664",
"0x609cc429719b89c538c02e778a2b2be2a04905787683e0a4688776d22517071c",
"0xc77113e002982c2092d76cf6266c932482b78c079f85c2c0ebcff9dfc5f016ac",
"0x9cb97306582f0a1a5579934277e9eb4527f3f9d9c66fde6347d2952de91ca70a",
"0x23e853afd9bd35d3a7e43ff6d3c2989722bf1c198eae3cb6c5fbda5069186710",
"0x44af6d2c3d1f2121ed0e105c394e35c2d4c032406fd2a73e22400aa2ab3befe8",
"0xde14e2a8418f53ebbdfc75c7c7c333eeb9911fe883c3e71fa0839e9f24dd5284",
"0xa19e3a76782fc32ca35c55f9ddf73e264ad52d1041f0ae8a6ed74d0cc544738c",
"0x0c6807fe9c80a3d5c47d7b0dbb7611e4a21f4b3195bd7a0825750afb77e72e0f"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

