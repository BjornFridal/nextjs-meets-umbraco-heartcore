import Link from 'next/link';
import Footer from '../components/Footer';
import { getBandMembers } from '../lib/api';
import { motion } from 'framer-motion';

export default function Home({ members }) {
  return (
    <div className="relative overflow-hidden bg-yellow-100">
      <div className="flex h-screen -mr-0.5">
        {members.map(({ name, url }, index) => (
          <Member
            name={name}
            url={url}
            slideInFromTop={index % 2 == 1}
            key={url}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

const Member = ({ name, url, slideInFromTop }) => {
  return (
    <motion.div
      className="flex flex-1 justify-center items-center text-3xl font-bold bg-yellow-200 mr-0.5 text-center hover:bg-yellow-100"
      whileHover={{
        scale: 1.2
      }}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          y: slideInFromTop ? '-100vh' : '100vh'
        },
        animate: {
          y: 0
        }
      }}
    >
      <Link href={url}>{name}</Link>
    </motion.div>
  );
};

export async function getStaticProps() {
  const members = await getBandMembers();
  return {
    props: {
      members
    }
  };
}
