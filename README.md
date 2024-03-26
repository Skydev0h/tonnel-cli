# TONNEL-CLI v0.1

## **BETA VERSION - CAUTION ⚠️**

This is a beta version. The product is in development, and bugs may occur. If you encounter any issues, please open an issue on GitHub and provide a detailed description.

## USAGE RECOMMENDATIONS

**Important: Triple-check every action!**

This is a beta version, so exercise caution with every action you perform. Your secrets are not currently stored (note that secret keys are deleted from the console after being shown), and losing access to your funds is possible without them. To enhance security, consider using TonKeeper to send transactions.
TonKeeper emulates the transaction flow before sending and highlights any potential problems, allowing you to review and approve transactions with confidence.

**Please Note:**

- **Secrets:** Ensure you save your secrets securely, as they are not currently stored.
- **TonKeeper:** Consider using TonKeeper for sending transactions to simulate and review the transaction flow before approval.

Your feedback is valuable in improving the stability and security of this beta version. Thank you for testing and helping us enhance TONNEL-CLI!

# Installation

Currently, npm package doesn't work properly, so run it from sources

```bash
git clone https://github.com/Skydev0h/tonnel-cli && cd tonnel-cli && yarn install
```

## Usage

```bash
yarn dev
```

## Automated processing

If you need to withdraw lots of keys, or tree build keeps failing on some lite server errors, you can use automated processing mode.

To use it, create `auto.txt` file in `key` directory (then, `Withdraw -> Direct withdraw` will be automatically selected).

Afterward, put your withdrawal recipient into `key/address.txt` file.

Finally, **COPY** your `PrivateKey*.txt` or `privatekeydocument*.txt` into `key` directory.

It is important to **COPY** files because after processing they will be deleted, so that you can re-run the `yarn dev` again to process the next key.

