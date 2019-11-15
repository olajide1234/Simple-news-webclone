const urlMetadata = require('url-metadata')


export default async function getArticles(latestItem) {
  try {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/newstories.json`);
    const storiesIdArray = await response.json();
    if (latestItem === 0) {
      const resultArray = []
      for (let index = storiesIdArray.length - 1; index > storiesIdArray.length - 30; index--) {
        const article = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storiesIdArray[index]}.json`);
        const articleJson = await article.json();

        if (articleJson) {

          // fetch and set images
          let imageUrlWebData;
          let imageUrlWeb;

          await urlMetadata(`https://cors-anywhere.herokuapp.com/${articleJson.url}`).then(
            function (metadata) {
              imageUrlWebData = metadata;

            },
            function (error) {
            })

          if (imageUrlWebData) {
            imageUrlWeb = imageUrlWebData[`og:image`] || imageUrlWebData.image || 'https://picsum.photos/1064/648'
          } else {
            imageUrlWeb = 'https://picsum.photos/1064/648'
          };

          const articleData = {
            image: imageUrlWeb,
            title: articleJson.title,
            link: articleJson.url,
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
          }
          resultArray.push(articleData);
        }
      }

      return { data: resultArray, latestItem: storiesIdArray.length - 30 };
    }

    const resultArray = []
    
    for (let index = latestItem; index > latestItem - 30; index--) {
      const article = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storiesIdArray[index]}.json`);
      const articleJson = await article.json();

      if (articleJson) {

      // fetch and set images
      let imageUrlWebData;
      let imageUrlWeb;

      await urlMetadata(`https://cors-anywhere.herokuapp.com/${articleJson.url}`).then(
        function (metadata) {
          imageUrlWebData = metadata;
        },
        function (error) {
        })

      if (imageUrlWebData) {
        imageUrlWeb = imageUrlWebData[`og:image`] || imageUrlWebData.image || 'https://picsum.photos/1064/648'
      } else {
        imageUrlWeb = 'https://picsum.photos/1064/648'
      };

      const articleData = {
        image: 'https://picsum.photos/1064/648',
        title: articleJson.title,
        link: articleJson.url,
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has survived not only five centuries, but also the leap into electronic typesetting, 
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
          containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
          including versions of Lorem Ipsum.`
      }
      resultArray.push(articleData);
    }
  }
    return { data: resultArray, latestItem: latestItem - 30 };

  } catch (error) {
    console.log('error', error);
  }
};
