export const envConfiguration = () => ({
  NODE_ENV: process.env.NODE_ENV || 'dev',
  MONGO_DB_URI: process.env.MONGO_DB_URI,
  PORT: +process.env.PORT || 3000,
});
