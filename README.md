# PSPDFKit for Web Angular Example

This example shows how PSPDFKit for Web can be integrated in an Angular project. The project was created using [Angular CLI](https://cli.angular.io/), although some simplifications have been made to focus on integrating PSPDFKit. For more guided instructions, check out our [blog post](https://pspdfkit.com/blog/2019/open-pdf-angular/).

## Prerequisites

- [Node.js](https://nodejs.org)
- A PSPDFKit for Web license. If you don't already have one you can [request a free trial](https://pspdfkit.com/try).

## Support, Issues and License Questions

PSPDFKit offers support for customers with an active SDK license via [https://pspdfkit.com/support/request](https://pspdfkit.com/support/request)

Are you evaluating our SDK? That's great, we're happy to help out! To make sure this is fast, please use a work email and have someone from your company fill out our sales form: [https://pspdfkit.com/sales](https://pspdfkit.com/sales)

## Getting Started

Clone the repo:

```bash
git clone https://github.com/PSPDFKit/pspdfkit-web-example-angular
cd pspdfkit-web-example-angular
```

Install the project dependencies:

```bash
npm install
```

Now that everything is installed, we need to configure the app to use our PSPDFKit for Web license key.

Open `src/license-key.ts`, and replace the text `YOUR_LICENSE_KEY_GOES_HERE` with the license key that you received via e-mail. As the comment mentions, you should not commit your license key to prevent the risk of accidentally uploading it.

## Running the Example

```bash
yarn start
```

The example will now be running at `http://localhost:4200`
