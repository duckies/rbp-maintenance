import Image from 'next/image';

export default function IndexPage() {
  return (
    <main className="card">
      <h1>Really Bad Maintenace</h1>

      <p>
        Our website is temporarily offline for upgrades to support Dragonflight. If you are interested in applying to our guild contact our recruiter through Discord at{' '}
        <code className="code--inline">Azzekal#6909</code>.
      </p>

      <Image className="duck" src="/images/duck.png" width="62" height="62" alt="WoW duck" />
    </main>
  );
}
