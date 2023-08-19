import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    let {title,desc,imgUrl,newsUrl} = this.props;
    return (
        <div className="card newsItem mx-1 my-1" style={{width: "18rem"}}>
        <img src={imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-dark btn-sm">Read More</a>
        </div>
        </div>
    )
  }
}
