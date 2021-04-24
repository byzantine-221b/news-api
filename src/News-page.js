import React, { createContext, useEffect, useState, useContext, Link } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "28a99ac166b24d2eacb2784afb53dfe7";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};



function NewsArticle({ data }) {
    return (
      <div className="news">
        <h1 className="news__title">{data.title}</h1>
        <img src={data.urlToImage} style={{width:'550px', height:'300px'}}/>
        <p className="news__desc">{data.description}</p>
        <span className="news__author">{data.author}</span>
        <br />
        <span className="news__source">{data.source.name}</span> 
        <br />
        <span className="news__published">{data.publishedAt}</span> 
        <br />
        <br />
        <a href={data.url} target="_blank"><h4>Read the complete article</h4></a>
        
      </div>
    );
  }

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <h1 className="head__text">Top Market News</h1>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading......"}
      </div>
    </div>
  );
}

export default News;
