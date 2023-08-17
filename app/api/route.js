import { GetServerSideProps } from 'next';
import { NextResponse } from 'next/server';
import { AuthOptions, getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]/route';

export async function GET(request) {
  const session = await getServerSession(authOptions);
  return NextResponse.json({ authenticated: !!session });
}
