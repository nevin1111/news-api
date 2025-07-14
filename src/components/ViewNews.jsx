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
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            {
                                News.articles.map(
                                    (data, index) => {
                                        return (

                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                                <div class="card">
                                                    <div class="card-header">
                                                        {data.urlToImage}
                                                    </div>
                                                    <div class="card-body">
                                                        <h5 class="card-title">Special title treatment</h5>
                                                        <p class="card-text">{data.description}</p>
                                                        <a href="#" class="btn btn-primary">{data.url}</a>
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