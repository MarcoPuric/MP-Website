// generate-secret.js
const { authenticator } = require("otplib");

const secret = authenticator.generateSecret();

console.log("🔐 Dein Admin-TOTP-Secret ist:");
console.log("\n===============================");
console.log(secret);
console.log("===============================\n");

console.log("🔧 Jetzt in deiner .env.local eintragen:");
console.log(`NEXT_PUBLIC_ADMIN_TOTP_SECRET=${secret}`);
