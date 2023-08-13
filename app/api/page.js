import User from '../../models/User';
import Candidate from '../../models/Candidate';
// import data from '../../utils/data.json';
import data from '../../utils/data';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Candidate.deleteMany();
  await Candidate.insertMany(data.candidates);
  await db.disconnect();
  // res.send({ message: 'seeded successfully' });
};
export default handler;
