const myProjects = [
  {
    key: 1,
    title: 'Web3 Online bookstore',
    link: "https://athena-five.vercel.app/",
    image: "../images/athena.jpg",
    description:
      ' This web application, created with MySQL, Node.js, Solana for blockchain, and React for the frontend, empowers authors to earn by selling ebooks and receive payments through Solana (SOL). To safeguard copyright, books are created and stored on the Solana blockchain. Readers can purchase books using Sol coins and enjoy them directly on the platform, with all transactions securely taking place on the blockchain. Essentially, the site combines the features of an online book store and a book reader.',
  },
  {
    key: 2,

    title: 'E-commerce website',
    image: "../images/ecomerce.png",
    link:"https://github.com/PatrickOjiambo/shopElegance",
    description:
      'This e-commerce platform, built with Node.js, MySQL, and React, allows users to easily browse products, add items to their cart, and place orders. Users can conveniently track their order status. For administrators, there is an admin platform that facilitates tasks such as creating products, managing product-related operations, and updating order statuses.',
  },
  {
    key: 3,
    title: 'Financial Tracker',
    image:"../images/finance.svg",
    link: "https://github.com/PatrickOjiambo/Personal-financial-tracker",
    description:
      "I developed a mobile application using flutter that consolidates users' financial information into a single platform. The app scans all messages on the user's phone, employing regular expressions to extract details such as transaction amounts, dates, and transaction types (outgoing or incoming). Additionally, the app retrieves supplementary information like the bank's name. The collected data is then elegantly presented to the user through a user-friendly dashboard, which includes a summary of all transactions.",
  },
  {
    key: 4,
    title: 'WhatsApp clone',
    image: "../images/whatsapp.png",
    link: "https://github.com/PatrickOjiambo/Whatsapp-clone",
    description:'I created a whatsApp clone using Flutter and Firebase. The app allows users to send and receive messages, images, and videos. Users can also create groups and chat with multiple people at once. The app also includes a feature that allows users to see if their messages have been read by the recipient. Additionally, the app has a feature that allows users to see if the recipient is typing a message'
  },
  {
    key: 5,
    title: "Onchain Certificate Verification",
    image: "../images/certify.jpg",
    link: "https://github.com/poseidons-navy/Pacify",
    description: "I developed a blockchain-based certificate verification system using Algorand. The system allows users to verify the authenticity of their certificates by scanning a QR code on the certificate. The system then retrieves the certificate details from the Algorand blockchain and displays them to the user. This system ensures that certificates cannot be forged or tampered with, as all certificate data is stored on the blockchain."
  }
];
export default myProjects;
