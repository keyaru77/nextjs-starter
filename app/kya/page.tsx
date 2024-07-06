import type { Metadata } from 'next';

const title = 'Kyaa | nextjs-starter';

export const metadata: Metadata = {
  title: title,
};

const Kyaa = () => {
  return (
    <div className="flex">
      <div className="text-3xl font-bold">About</div>
    </div>
  );
};

export default Kyaa;
