import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, matric, email, password } = body.data as {
      name: string;
      matric: string;
      email: string;
      password: string;
    };

    if (!name) {
      return new NextResponse('Kindly fill your name', { status: 400 });
    }
    if (!matric) {
      return new NextResponse('Kindly fill your matric no ', { status: 400 });
    }
    if (!email) {
      return new NextResponse('Kindly fill your email', { status: 400 });
    }
    if (!password) {
      return new NextResponse('Kindly fill your password', { status: 400 });
    }

    const exist = await prisma.user.findUnique({
      where: { email: email },
    });

    if (exist) {
      return new NextResponse('User already exist', { status: 400 });
    }
    const hashedPassword = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        matric,
        email: email.toLowerCase(),
        hashedPassword,
      },
    });

    return NextResponse.json({
      user: {
        name: user.name,
        matric: user.matric,
        email: user.email,
        password: user.hashedPassword,
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
