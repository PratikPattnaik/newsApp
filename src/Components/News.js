import React, { Component } from 'react'
import Item from './Item'
import logo_1 from './logo_1.jpg'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    pageSize:8,
    category:"general"
  }
  static propTypes = {
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
    constructor(){
        super()
        this.state={
            articles:[],
            page:1,
            totalResults:0,
            loading:false
        }
    }
    async componentDidMount(){
      this.setState({loading:true})
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6088a045e368415b94297f8db44b17ed&page=1&pagesize=${this.props.pageSize}`;
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults ,loading: false})
      console.log(this);
    }
    handleNext = async () => {
      // console.log(this.state.page +1)
      // console.log(Math.ceil(this.state.totalResults/this.props.pageSize))
      if(this.state.page +1 > Math.ceil((this.state.totalResults)/this.props.pageSize) ){
        
      }
      else{
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6088a045e368415b94297f8db44b17ed&page=${this.state.page + 1}&pagesize=${this.props.pageSize}&category=${this.props.category}`;
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState(
          {
            articles:parsedData.articles,
            page:this.state.page + 1,
            loading: false
          }
        )
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }
      
    }
    handlePrev = async () => {
      if(this.state.page - 1 < 1 ){
        
      }
      else{
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6088a045e368415b94297f8db44b17ed&page=${this.state.page - 1}&pagesize=${this.props.pageSize}&category=${this.props.category}`;
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState(
          {
            articles:parsedData.articles,
            page:this.state.page - 1,
            loading: false
          })
        }
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); 
    }
  render() {
    return (
      <>
      <div className='container my-5'>
        <h1 className='text-center'>{this.props.category==='general'?'Ab Tak ke Headlines!':`${this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)}`}</h1>
        <div className="news my-2">
            {this.state.loading && <Spinner/>}
            {!this.state.loading && this.state.articles.map((e) => {
              return(
                <Item key={e.url} title = {e.title} desc = {e.description} imgUrl = {!e.urlToImage?logo_1:e.urlToImage} newsUrl={e.url}/>
              )
           })}
        </div> 
      </div>
      <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark my-3" onClick={this.handlePrev}>&larr; Previous</button>
        <button disabled={this.state.page +1 > (Math.ceil((this.state.totalResults)/this.props.pageSize))} type="button" className="btn btn-dark my-3" onClick={this.handleNext}>Next &rarr;</button>
      </div>
      </>
      
    )
  }
}

export default News