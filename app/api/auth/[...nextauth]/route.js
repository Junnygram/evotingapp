import NextAuth from 'next-auth/next';
import { PrismaClient } from '@prisma/client';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();
export const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'John Smith',
        },
      },
      async authorize(credentials) {
        // check to see if email and password is there
        if (!credentials.email) {
          throw new Error('Please enter a correct email');
        }
        if (!credentials.password) {
          throw new Error('Please enter a correct password');
        }

        // check to see if user exists
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // if no user was found
        if (!user || !user?.hashedPassword) {
          throw new Error('No user found');
        }

        // check to see if password matches
        const passwordMatch = await bcryptjs.compare(
          credentials.password,
          user.hashedPassword
        );

        // if password does not match
        if (!passwordMatch) {
          throw new Error('Incorrect password');
        }

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // callbacks: {
  //   session: ({ session, token }) => {
  //     console.log('Session Callback', { session, token });
  //     return {
  //       ...session,
  //       user: {
  //         ...session.user,
  //         id: token.id,
  //         randomKey: token.randomKey,
  //       },
  //     };
  //   },
  //   jwt: ({ token, user }) => {
  //     console.log('JWT Callback', { token, user });
  //     if (user) {
  //       const u = user;
  //       return {
  //         ...token,
  //         id: u.id,
  //         randomKey: u.randomKey,
  //       };
  //     }
  //     return token;
  //   },
  // },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
