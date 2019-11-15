import React, { useEffect, useState } from 'react';

function HeadlineNews({data}) {

  const [article, setArticle] = useState({ image: 'https://picsum.photos/1064/648', title: 'Simple placeholder title', link: 'https://www.google.com/', text: 'Simple placeholder text that leads to Google' });
  
  useEffect(() => {
    if (data) {
      setArticle(data);
    }
  }, [data]);

  return (
    <a href={article.link} target="_blank" rel="noopener noreferrer">
      <div className='headline-post'>
        <img src='https://picsum.photos/1064/648'
          width="100%"
          alt="Headline news" ></img>
      <div className="featured-post text-block">
        <span className='news-category'>News now</span>
          <h3 className='news-excerpt-title'>{article.title}</h3>
          <p>{article.text}</p>
      </div>
      </div>
    </a>
  );
}

export default HeadlineNews;
