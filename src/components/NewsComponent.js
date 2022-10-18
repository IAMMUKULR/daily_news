import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropsTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsComponent = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    document.title = `${props.category} - Daily News`;
    UpdateNews();
  }, []);

  const UpdateNews = async () => {
    props.setprogress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=e8b1b25a3dbe4d1f9071eabf7501d8d6&pagesize=21&page=${page}`;
    const res = await fetch(url);
    setLoading(true);
    props.setprogress(40);
    const data = await res.json();
    props.setprogress(70);
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);

    props.setprogress(100);
  };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=e8b1b25a3dbe4d1f9071eabf7501d8d6&pagesize=21&page=${page + 1}`;
    setPage(page + 1);
    const res = await fetch(url);
    const data = await res.json();

    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
  };

  return (
    <>
      <h2
        className="text-center "
        style={{ paddingTop: "4.5rem", paddingBottom: "2.5rem" }}
      >
        Daily NEWS - Top {props.category} Headlines
      </h2>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles && articles.length}
        next={fetchMoreData}
        hasMore={articles && articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container my-2">
          <div className="row">
            {articles &&
              articles.map((element) => {
                return (
                  <div
                    className="col-sm-4"
                    key={element.url ? element.url : ""}
                  >
                    <NewsItem
                      title={element.title.slice(0, 60) + "..."}
                      description={
                        element.description
                          ? element.description.slice(0, 100) + "..."
                          : ""
                      }
                      newsurl="TODO"
                      imgurl={element.urlToImage}
                      url={element.url ? element.url : ""}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

NewsComponent.defaultProps = {
  category: "general",
};

NewsComponent.propTypes = {
  category: PropsTypes.string,
};

export default NewsComponent;
