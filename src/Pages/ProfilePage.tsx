import { useSession, signOut } from 'next-auth/react';
import { getServerSession } from 'next-auth';

export default async function ProfilePage() {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hi {session?.user?.email}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
