// import { getServerSession } from 'next-auth';
// import React from 'react';
// import { authOptions } from '../libs/auth';

// export default async function Profile() {
//   const session = await getServerSession(authOptions);
//   return (
//     <div>
//       {' '}
//       <div>{JSON.stringify(session)}</div>
//     </div>
//   );
// }
'use client';
import { useSession } from 'next-auth/react';

import React from 'react';

const Profile = () => {
  const { data: session, status } = useSession();
  console.log(session);

  return <div>Hello {JSON.stringify(session)}</div>;
};

export default Profile;
