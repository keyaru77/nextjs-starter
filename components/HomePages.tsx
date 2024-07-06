// components/HomePage.tsx
import React from 'react';

interface Article {
  link: string;
  typez: string;
  title: string;
  img: string;
}

interface HomePageProps {
  articles: Article[];
}

const HomePages: React.FC<HomePageProps> = ({ articles }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold">Articles</h1>
      <ul>
        {articles.map((article, index) => (
          <li className="ml-5 mt-5" key={index}>
            <a href={article.link}>
              <img src={article.img} alt={article.title} className="w-24 h-auto" />
              <span className="text-xl">{article.title}</span>
              <br />
              <span>{article.typez}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePages;
