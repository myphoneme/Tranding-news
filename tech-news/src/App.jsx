import { useEffect, useState } from "react";
import axios from "axios";

function BlogList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=trading&apiKey=75930e8401c24bca8b8ee0dfaec77cf9")
            .then(response => setArticles(response.data.articles))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Trading Tech Blogs</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                {articles.map((article, index) => (
                    <div key={index} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "10px" }}>
                        <img src={article.urlToImage} alt={article.title} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }} />
                        <h3 style={{ fontSize: "16px", marginTop: "10px" }}>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                {article.title}
                            </a>
                        </h3>
                        <p><strong>Source:</strong> {article.source.name}</p>
                        <p><strong>Published:</strong> {new Date(article.publishedAt).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogList;
