
---

# Node.js Tron Project

This Node.js project demonstrates how to interact with the Tron blockchain, specifically signing Tron transactions using a private key.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/guudc/SimpleTronTx.git
   ```

2. Navigate to the project directory:

   ```bash
   cd SimpleTronTx
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

Open the `config.js` file and update the Tron node URLs and your private key:

```javascript
exports.PRIV_KEY='<your_private_key_here>'
```

Replace `'your_private_key_here'` with your actual Tron wallet private key.

## Running the Project

Execute the following command to run the project:

```bash
node index.js
```

This will run the `index.js` script, demonstrating the process of signing a Tron transaction with the provided private key.

## Notes

- Keep your private key secure and never share it.
- Ensure you have TRX (Tron cryptocurrency) in your wallet for transaction fees.
- Customize the project according to your specific use case.

## Acknowledgments

This project uses the [TronWeb](https://github.com/TRON-US/tronweb) library for interacting with the Tron blockchain.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README according to your project structure, naming conventions, and any additional information you want to provide to users. Update the acknowledgments section if you use additional libraries or tools in your project.
