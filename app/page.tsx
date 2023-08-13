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
//     // Apply convertDocToObj function to each candidate
//     const convertedCandidates = candidates.map(db.convertDocToObj);
//     console.log(convertedCandidates);

//     return {
//       props: {
//         candidates: convertedCandidates,
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
