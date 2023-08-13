import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        let url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/${props.country}.json`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setLoading(false)
        setArticles(parsedData.articles)

    }

    useEffect(() => {
        document.title = `${capitalize(props.category)} - NewsPortal | Get daily news for free`;
        updateNews();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container my-5">
            <h1 className="text-center">Top {capitalize(props.category) === "General" ? "" : capitalize(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <div className="row">
                {articles.map((element) => {
                    return <div className="col-md-4 my-3" key={element.url}>
                        <NewsItem mode={props.mode} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "NewsPortal"} publishedAt={element.publishedAt.slice(0, 10)} source={element.source.name} />
                    </div>
                })}

            </div>
        </div>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 3,
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News