// import dotenv from 'dotenv';
import * as dotenv from 'dotenv';

dotenv.config({
  path:
    process.env.NODE_ENV === 'production'
      ? process.cwd() + '/.env'
      : process.cwd() + '/.env.development',
});

export const config = {
  port: Number(process.env.PORT) || 4000,
  cryptoSalt: 10,
  jwtSecretKey: process.env.JWT_SECRET_KEY ?? 'secret123123',
  jwtSecretRefreshKey: process.env.JWT_SECRET_REFRESH_KEY ?? 'secret123123',
  tokenExpireTime: process.env.TOKEN_EXPIRE_TIME ?? '1h',
  tokenRefreshExpireTime: process.env.TOKEN_REFRESH_EXPIRE_TIME ?? '24h',
};
