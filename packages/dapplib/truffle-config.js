require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note spice purchase install ensure olympic gentle'; 
let testAccounts = [
"0x1ab1bb5b50b1a3970ad4d8526263a1124cad942596b528107e9c5eab8db9949f",
"0xf629b785bfd4b91ba2f9c17af0ece10249ec3727c984f9b06213e2c24e6cb8e9",
"0x0a729e10e52881478af3ad2416c13cf1f6d33668cdffaa9d75a5dd073b3d5614",
"0xba32b867271d85ad512809a0d7e5546981a753b18b47cf915105a5d65b70bff6",
"0x46a18342345dea03f9e3318948707fed6705b43216facd974b971c53ad35b10b",
"0x69669f90bcf4abd044ce27075d5202b2608ca0e799e310dba16a81eaa7ee916a",
"0x80c617eb6116cdeed371f4ad45e83af5f4aca0f4208bf427022a7065db75e72e",
"0xeaf3caf37cd6dffc1083b9cfbf7aa645c1890a92fea03dd5314d99e77764f1fb",
"0xcd1dd87f0fce9c50c46e62451599da42cd2817b74c6ed0788dc90e3c943f3862",
"0x25114f286d332d117fd92da8c3797c4dee7cd5d8bf07b24e24728ba76f0f4412"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

