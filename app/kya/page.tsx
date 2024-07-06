import type { Metadata } from 'next';

const title = 'kya | nextjs-starter';

export const metadata: Metadata = {
  title: title,
};

const Kya = () => {
  return (
    <div className="flex">
      <div className="text-3xl font-bold">Kyahh</div>
    </div>
  );
};

export default Kya;
