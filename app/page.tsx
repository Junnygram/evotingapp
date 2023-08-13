import { Homepage } from '@/src/Pages/HomePage';
import db from '../utils/db';
import Candidate from '../models/Candidate';

// interface CandidateProps {
//   candidates: [];
// }
export default function Home() {
  return <Homepage />;
}

// export async function getServerSideProps() {
//   await db.connect();
//   try {
//     const candidates = await Candidate.find().lean();
//     const plainCandidates = candidates.map((candidate) => candidate.toObject());
//     return {
//       props: {
//         candidates: plainCandidates,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching candidates:', error);
//     return {
//       props: {
//         candidates: [],
//       },
//     };
//   }
// }
