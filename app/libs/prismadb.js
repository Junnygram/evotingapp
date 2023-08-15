import { PrismaClient } from '@prisma/client';

const prisma = globalThisPrisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.Prisma = prisma;

export default prisma;
