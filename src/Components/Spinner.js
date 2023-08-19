import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div className="container news">
          <div className="card mx-1 my-1 newsItem load" style={{ width: "18rem" }}>
            <div className="skeleton skeleton-img"></div>
            <div className="card-body">
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>

              <div className="skeleton skeleton-p"></div>
              <div className="skeleton skeleton-p"></div>
              <div className="skeleton skeleton-p"></div>
            </div>
          </div>
          <div className="card mx-1 my-1 newsItem load" style={{ width: "18rem" }}>
            <div className="skeleton skeleton-img"></div>
            <div className="card-body">
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>

              <div className="skeleton skeleton-p"></div>
              <div className="skeleton skeleton-p"></div>
              <div className="skeleton skeleton-p"></div>
            </div>
          </div>
          <div className="card mx-1 my-1 newsItem load" style={{ width: "18rem" }}>
            <div className="skeleton skeleton-img"></div>
            <div className="card-body">
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>

              <div className="skeleton skeleton-p"></div>
              <div className="skeleton skeleton-p"></div>
              <div className="skeleton skeleton-p"></div>
            </div>
          </div>
          <div className="card mx-1 my-1 newsItem load" style={{ width: "18rem" }}>
            <div className="skeleton skeleton-img"></div>
            <div className="card-body">
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>

              <div className="skeleton skeleton-p"></div>
              <div className="skeleton skeleton-p"></div>
              <div className="skeleton skeleton-p"></div>
            </div>
          </div>
          <div className="card mx-1 my-1 newsItem load" style={{ width: "18rem" }}>
            <div className="skeleton skeleton-img"></div>
            <div className="card-body">
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>

              <div className="skeleton skeleton-p"></div>
              <div className="skeleton skeleton-p"></div>
              <div className="skeleton skeleton-p"></div>
            </div>
          </div>
      </div>
    );
  }
}
