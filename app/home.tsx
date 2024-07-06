import type { Metadata } from 'next';
import HomeContentPage, { Article } from './HomeContentPage';

const title = 'Home Content | nextjs-starter';

export const metadata: Metadata = {
  title: title,
};

async function getArticles(): Promise<Article[]> {
  const res = await fetch('https://cuy-api.vercel.app/v1/home');
  const data = await res.json();
  return data.articles;
}

export default async function HomeContent() {
  const articles = await getArticles();
  return <HomeContentPage articles={articles} />;
}
