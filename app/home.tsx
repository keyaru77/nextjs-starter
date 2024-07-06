// pages/home.tsx
import { GetServerSideProps } from 'next';
import HomePage from '../components/HomePages'; // Assuming you put HomePage component in components directory

interface Article {
  link: string;
  typez: string;
  title: string;
  img: string;
}

interface HomeProps {
  articles: Article[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://cuy-api.vercel.app/v1/home');
  const data = await res.json();
  const articles: Article[] = data.articles;

  return {
    props: {
      articles,
    },
  };
};

const Home = ({ articles }: HomeProps) => {
  return <HomePages articles={articles} />;
};

export default Home;