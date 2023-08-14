import { PrismaClient } from '@prisma/client';

const client = globalThisPrisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThisPrisma = client;

export default client;
