// lib/auth.ts
export const isAuthorized = (input: string) => {
    const secret = "mein-starkes-passwort"; // ← hier dein Passwort
    return input === secret;
  };
  