import React, { useEffect, useState } from 'react';
import { Container, CardColumns } from 'react-bootstrap';
import NewsCard from '../../components/NewsCard';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import MorePosts from '../../components/MorePosts';
import Footer from '../../components/Footer';
import getArticles from '../../actions/index';
import Loader from '../../components/Loader';

const dummy1 = { image: 'https://picsum.photos/1064/648', title: 'Simple placeholder title', link: 'https://www.google.com/',  text:'Simple placeholder text that leads to Google'}
const dummy2 = { image: 'https://picsum.photos/1064/648', title: 'Simple placeholder title.', link: 'https://www.google.com/', text: 'Simple placeholder text that leads to Google' }
function Homepage() {


  const [articles, setArticles] = useState({
    content: [dummy1, dummy2],
    latestItem: 0,
  });


  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoad(true)
      const response = await getArticles(articles.latestItem);
      
      setArticles({ content: [...articles.content, ...response.data], latestItem: response.latestItem})
      setLoad(false)
    }
    fetchData();
  }, []);


  async function increaseViewedArticles () {
    setLoad(true);
    const response = await getArticles(articles.latestItem);
    setArticles({ content: [...articles.content, ...response.data], latestItem: response.latestItem })
    setLoad(false)
  }

  return (
    <>
      {load ? <Loader /> : null}
    <Header />
      <Container className='mainbody'>
        <Banner data={articles.content[10]}/>
          <CardColumns className='card-columns' >
            {articles.content.map((article)=> <NewsCard key={article.title} data={article}/>)}
        </CardColumns>
        <MorePosts onClick={() => increaseViewedArticles()} />
      </Container>
      <Footer />
    </>
  );
}

export default Homepage;
