require("dotenv").config();

const authData = {
  type: process.env.NEXT_PUBLIC_GOOGLE_TYPE,
  project_id: process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID,
  private_key_id: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY_ID,
  private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY
    ? process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
    : null, // Private keylerdeki '\n' karakterlerini newline ile değiştirmek gerekebilir
  client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
  client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  auth_uri: process.env.NEXT_PUBLIC_GOOGLE_AUTH_URI,
  token_uri: process.env.NEXT_PUBLIC_GOOGLE_TOKEN_URI,
  auth_provider_x509_cert_url:
    process.env.NEXT_PUBLIC_GOOGLE_AUTH_PROVIDER_CERT_URL,
  client_x509_cert_url: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_CERT_URL,
  universe_domain: process.env.NEXT_PUBLIC_GOOGLE_UNIVERSE_DOMAIN,
};

module.exports = authData;
