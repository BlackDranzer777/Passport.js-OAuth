import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({post}) {
    return (
        <div className="card">
            <Link className="link" to={`/post/${post.id}`}>
                <span className="title">{post.title}</span>
                <img src={post.img} alt="" className="cardImg" />
                <p className="desc">{post.desc}</p>
                <button className="cardButton">Read more</button>
            </Link>
        </div>
    )
}
