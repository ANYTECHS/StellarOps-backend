import type { PrismaClientOptions } from '@prisma/client/runtime/library';

const DATABASE_URL = process.env.DATABASE_URL;


if (!DATABASE_URL) {
  throw new Error(
    'Missing DATABASE_URL. Add it to stellarHerd-backend/.env (or set env var before running Prisma).',
  );
}

const options = {
  datasources: {
    db: {
      url: DATABASE_URL,
    },
  },
};

export default options;

