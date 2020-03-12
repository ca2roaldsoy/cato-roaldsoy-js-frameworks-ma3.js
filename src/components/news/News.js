import React from 'react';
import Heading from '../pageTitle/Heading.js';
import NewsList from './NewsList.js';

function News () {
    
    return (
        
        <section>
            <Heading title="News"/>
            <NewsList />
        </section>
    )
}

export default News;