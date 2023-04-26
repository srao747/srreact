import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function NavPage() {

    const [articles, setArticles] = useState([])
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?pageSize=6&country=in&apiKey=f5010aa1fefe47258db55540100af60c`)
            setArticles(response.data.articles)
            console.log(response)
        }
        const interval = setInterval(() =>  getArticles());
        return () => {
          clearInterval(interval);
        };
        getArticles();
    }, [])

    return (

        <div style={{height:'100%'}}>
        {articles.map(article => {
            return(
                <div className="news-app">
                <div className='news-item'>
                    <div className='d-flex justify-content-between'>
                        <img width={'150px'} height={'150px'} className='news-img' src={article.urlToImage} alt={article.urlToImage} />
                        <div className='news_content'>
                            <h3><a href={article.url}>{article.title}</a></h3>
                        </div>
                    </div>
                    <p>{article.description}</p>
                </div>
            </div>
            )
        })}
    </div>

    )
}