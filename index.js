const TronWeb = require('tronweb');
const { PRIV_KEY, TRON_BASE_FEE, NILE_URL } = require('./config');
// Connecting to a Tron node
const tronWeb = new TronWeb({
  fullNode: NILE_URL,  
  solidityNode: NILE_URL,  
  eventServer: NILE_URL,
  privateKey: PRIV_KEY
});

const signTransferTransaction = async () => {
    try{//define account
        const account = tronWeb.address.fromPrivateKey(PRIV_KEY); 
        // Define the transaction data
        const toAddress = 'TPwM1TZyfyJJ19SYVw5JUd1gt94uuhZtP7';
        const amount = 1 * TRON_BASE_FEE; // Amount in SUN (1 TRX = 1,000,000 SUN)
 
        // Create a transaction
        const transaction = await tronWeb.transactionBuilder.sendTrx(
        toAddress,
        amount,
        account.address  
        );

        // Sign the transaction
        const signedTransaction = await tronWeb.trx.sign(transaction, PRIV_KEY);  
        // Broadcast the signed transaction
        const result = await tronWeb.trx.sendRawTransaction(signedTransaction);
        console.log('Transaction result:', result);
        return result
    }
    catch(e) {
        console.log(e)
    }
}

signTransferTransaction()



