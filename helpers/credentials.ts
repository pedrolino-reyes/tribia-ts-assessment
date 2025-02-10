import dotenv from 'dotenv';

// Load environment variables from .env file if present
dotenv.config();

interface Credentials {
  loginUser: string;
  loginPass: string;
}

function getCredentials(): Credentials {
  const loginUser = process.env.LOGIN_USER || '';
  const loginPass = process.env.LOGIN_PASS || '';

  if (!loginUser || !loginPass) {
    throw new Error('Environment variables LOGIN_USER and LOGIN_PASS must be set');
  }

  return { loginUser, loginPass };
}

export const credentials = getCredentials();