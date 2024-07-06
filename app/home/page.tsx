import Image from 'next/image';

export default function Home({ articles }: { articles: any[] }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">Articles</h1>
        <div className="grid gap-8 lg:grid-cols-2">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              className="block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={article.img}
                alt={article.title}
                width={247}
                height={350}
                className="mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-700 dark:text-gray-400">{article.typez}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch('https://cuy-api.vercel.app/v1/home');
    const data = await res.json();
    const articles = data.articles;

    return {
      props: {
        articles,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        articles: [],
      },
    };
  }
}
