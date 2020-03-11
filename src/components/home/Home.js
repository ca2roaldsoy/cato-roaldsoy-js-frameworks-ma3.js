import React from 'react';
import Heading from '../Heading.js';
import HomeContent from './HomeContent.js';

function Home() {
    
    return (
        <div>
            <Heading title="Pokemon" />
            <HomeContent>

                Pokemon!<br />
                Gotta catch em' all!

            </HomeContent>
        </div>
    )
}

export default Home;