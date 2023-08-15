import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { compare } from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, password } = (await req.json()) as {
      email: string;
      password: string;
    };

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new NextResponse(
        JSON.stringify({
          status: 'error',
          message: 'Invalid email or password',
        }),
        { status: 401 }
      );
    }

    const passwordsMatch = await compare(password, user.password);

    if (!passwordsMatch) {
      return new NextResponse(
        JSON.stringify({
          status: 'error',
          message: 'Invalid email or password',
        }),
        { status: 401 }
      );
    }

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: 'error',
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
