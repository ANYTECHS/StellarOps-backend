const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error('Missing DATABASE_URL. Add it to .env (or configure your environment).');
}

const options = {
  datasources: {
    db: {
      url: DATABASE_URL,
    },
  },
};

export default options;
