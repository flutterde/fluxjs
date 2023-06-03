const { PrismaClient } = require("@prisma/client");



const prisma = global.prisma || new PrismaClient();

if(process.env.NODE_ENV === 'dev') global.prisma;

module.exports = prisma;