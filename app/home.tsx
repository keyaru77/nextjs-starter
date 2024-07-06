import type { Metadata } from 'next';
import HomeContentPage, { Article } from './HomeContentPage';

const title = 'Home Content | nextjs-starter';

export const metadata: Metadata = {
  title: title,
};

async function getArticles(): Promise<Article[]> {
  const res = await fetch('https://cuy-api.vercel.app/v1/home');
  if (!res.ok) {
    throw new Error('Failed to fetch articles');
  }
  const data = await res.json();
  return data.articles;
}

export default async function HomeContent() {
  let articles: Article[] = [];
  try {
    articles = await getArticles();
  } catch (error) {
    console.error(error);
    // Handle the error appropriately here, e.g., set a default state or return an error message
  }
  return <HomeContentPage articles={articles} />;
}
