import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, matric, email, password } = body as {
      name: string;
      matric: string;
      email: string;
      password: string;
    };
    const hashed_password = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        matric,
        email: email.toLowerCase(),
        password: hashed_password,
      },
    });

    return NextResponse.json({
      user: {
        name: user.name,
        matric: user.matric,
        email: user.email,
        password: user.password,
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

// import { PrismaClient } from '@prisma/client';
// import { NextResponse } from 'next/server';

// const prisma = new PrismaClient();

// export async function POST(request) {
//   const { name, matric, email, password } = await request.json();

//   const user = await prisma.user.create({
//     data: {
//       name,
//       matric,
//       email,
//       password,
//     },
//   });

//   return NextResponse.json({ message: 'User created successfully', user });
// }
