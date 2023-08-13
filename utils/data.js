import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Olaleye',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'john',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  candidates: [
    {
      //   id: 1,
      name: 'Olaleye Oye',
      level: '400 Level',
      dept: ' Physics  ',
      position: 'SUG President',
      img: '/assets/candidate1.jpeg',
    },
    {
      //   id: 2,
      name: 'koko Steph',
      level: '400 Level',
      dept: ' Chemistry',
      position: 'SUG President',
      img: '/assets/candidate2.jpeg',
    },
    {
      //   id: 3,
      name: 'Temi Designs',
      level: '400 Level',
      dept: ' Art',
      position: 'Vice President',
      img: '/assets/candidate3.jpeg',
    },
    {
      //   id: 4,
      name: 'Temi Designs',
      level: '400 Level',
      dept: ' commercial ',
      position: 'Vice President',
      img: '/assets/candidate4.jpeg',
    },
    {
      //   id: 5,
      name: 'Olaleye Oye',
      level: '400 Level',
      dept: ' Physics  ',
      position: 'Fin Secretary',
      img: '/assets/cv1.jpeg',
    },
    {
      //   id: 6,
      name: 'koko Steph',
      level: '400 Level',
      dept: ' Chemistry',
      position: 'Fin Secretary',
      img: '/assets/cv2.jpeg',
    },
    {
      //   id: 7,
      name: 'Temi Designs',
      level: '400 Level',
      dept: ' Art',
      position: 'Gen Secretary',
      img: '/assets/cv3.jpeg',
    },
    {
      //   id: 8,
      name: 'Temi Designs',
      level: '400 Level',
      dept: ' commercial ',
      position: 'Gen Secretary',
      img: '/assets/cv4.jpeg',
    },
    {
      //   id: 7,
      name: 'Temi Designs',
      level: '400 Level',
      dept: ' Art',
      position: 'Soc. Secretary',
      img: '/assets/candidate3.jpeg',
    },
    {
      //   id: 8,
      name: 'Temi Designs',
      level: '400 Level',
      dept: ' commercial ',
      position: 'Soc. Secretary',
      img: '/assets/candidate4.jpeg',
    },
    {
      //   id: 9,
      name: 'Olaleye Oye',
      level: '400 Level',
      dept: ' Physics  ',
      position: 'Treasurer',
      img: '/assets/candidate1.jpeg',
    },
    {
      //   id: 10,
      name: 'koko Steph',
      level: '400 Level',
      dept: ' Chemistry',
      position: 'Treasurer',
      img: '/assets/candidate2.jpeg',
    },
  ],
};

export default data;
