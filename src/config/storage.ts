export default {
  pg: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string, 10),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    max: 20,
    idleTimeoutMillis: 1000,
    connectionTimeoutMillis: 1000,
    maxUses: 7500,
  },
  redis: {},
};
