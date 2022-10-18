import React from "react";

const NewsItem = (props) => {
  let { title, description, imgurl, url, author, date, source } = props;
  return (
    <div className="my-2">
      <div className="card" style={{ border: "1", borderColor: "grey" }}>
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
          {source}
        </span>

        <p className="card-text text-center py-3">
          <small className="text-muted">
            <b>Author:</b> {author ? author : "unknown"}
            <br />
            <b> Date:</b> {new Date(date).toLocaleString()}
          </small>
        </p>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                !imgurl
                  ? `https://media.istockphoto.com/photos/canadian-rockies-banff-national-park-dramatic-landscape-picture-id1342152935?b=1&k=20&m=1342152935&s=170667a&w=0&h=q9-vhO5MC7zwaxX8_zFUiqMnQJ5udMjEBf0npeCCAGs= `
                  : imgurl
              }
              className="card-img-top"
              alt="image"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
            </div>
          </div>
          <p className="card-text">{description}</p>
          <a href={url} target="_blank" className="btn btn-sm btn-primary">
            Read Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
