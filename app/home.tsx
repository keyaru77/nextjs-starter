import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import HomeContentPage, { Article } from './HomeContentPage';

const title = 'Home Content | nextjs-starter';

interface HomeProps {
  articles: Article[];
}

const Home: NextPage<HomeProps> = ({ articles }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Home Page</h1>
      <HomeContentPage articles={articles} />
      <div className="mt-10">
        <Link href="/home">
          <a className="text-xl text-blue-500">Go to Home Content</a>
        </Link>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let articles: Article[] = [];
  try {
    const res = await fetch('https://cuy-api.vercel.app/v1/home');
    if (!res.ok) {
      throw new Error('Failed to fetch articles');
    }
    const data = await res.json();
    articles = data.articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    // Handle error fetching data, e.g., set a default state
  }

  return {
    props: {
      articles,
    },
    revalidate: 60, // Re-generate the page every 60 seconds (1 minute)
  };
};

export default Home;
