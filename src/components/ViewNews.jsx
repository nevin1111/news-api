import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewShop = () => {
    const [News, ChangeNews] = useState(
        { "articles": [] }
    )

    const fetchData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7c1139f61f624a3abc81786995a761c7").then(
            (response) => {
                ChangeNews(response.data)
            }
        ).catch()
    }

    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            {
                                News.articles.map(
                                    (data, index) => {
                                        return (

                                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                                <div class="card" >
                                                    <img src={data.thumbnail} class="card-img-top" alt="..."></img>
                                                    <div class="card-body">
                                                        <h5 class="card-title">{data.title}</h5>
                                                        <p class="card-text">{data.description}</p>
                                                        <br />
                                                        <p class="card-text">{data.url}</p>
                                                        <a href="#" class="btn btn-primary">Add to Cart</a>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ViewShop