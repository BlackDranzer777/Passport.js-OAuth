import React from 'react';
import './Home.css';
import {posts} from '../../data';
import Card from '../../components/card/Card';

export default function Home() {
    return (
        <div className="home">
            {posts.map(post => (
                <Card key={post.id} post={post} />
            ))}
        </div>
    )
}
