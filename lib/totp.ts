// lib/totp.ts
import { authenticator } from "otplib";

authenticator.options = { step: 30 };

export const verifyTOTP = (token: string, secret: string) => {
  return authenticator.check(token, secret);
};

export const getOTPAuthUrl = (secret: string, user: string) => {
  return authenticator.keyuri(user, "Marco Puric Admin", secret);
};
