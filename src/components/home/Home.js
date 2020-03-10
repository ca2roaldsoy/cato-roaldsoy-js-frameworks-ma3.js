import React from 'react';
import Heading from '../Heading.js';
import homeContent from './HomeContent.js';

function Home() {
    
    return (
        <div>
            <Heading title="Pokemon" />
            <homeContent>

                Pokemon!<br />
                Gotta catch em' all!

            </homeContent>
        </div>
    )
}

export default Home;