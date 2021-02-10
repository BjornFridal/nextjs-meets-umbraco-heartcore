import Link from 'next/link';
import Footer from '../components/Footer';
import { getBandMembers } from '../lib/api';

export default function Home({ members }) {
  return (
    <div className="relative overflow-hidden bg-yellow-100">
      <div className="flex h-screen -mr-0.5">
        {members.map(({ name, url }) => (
          <Member name={name} url={url} key={url} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

const Member = ({ name, url }) => {
  return (
    <div className="flex flex-1 justify-center items-center text-3xl font-bold bg-yellow-200 mr-0.5 text-center hover:bg-yellow-100">
      <Link href={url}>{name}</Link>
    </div>
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
