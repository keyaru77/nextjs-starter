export interface Article {
  link: string;
  typez: string;
  title: string;
  img: string;
}

export default function HomeContentPage({ articles }: { articles: Article[] }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold">Articles</h1>

      <ul>
        {articles.map((article) => (
          <li className="ml-5 mt-5" key={article.link}>
            <a href={article.link} className="text-xl font-bold">
              {article.title}
            </a>
            <br />
            <span className="text-sm">{article.typez}</span>
            <br />
            <img src={article.img} alt={article.title} className="mt-2" />
          </li>
        ))}
      </ul>
    </div>
  );
}
