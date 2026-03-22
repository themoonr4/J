import React from 'react';
import './ArticleCard.css';

interface ArticleCardProps {
    title: string;
    author: string;
    date: string;
    excerpt: string;
    link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, author, date, excerpt, link }) => {
    return (
        <div className="article-card">
            <h2>{title}</h2>
            <p className="author-date">By {author} on {date}</p>
            <p className="excerpt">{excerpt}</p>
            <a href={link} className="read-more">Read More</a>
        </div>
    );
};

export default ArticleCard;