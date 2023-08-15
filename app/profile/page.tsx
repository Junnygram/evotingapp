import { useSession, signOut } from 'next-auth/react';

const Profile = () => {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hi {session?.user?.email}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Profile;
