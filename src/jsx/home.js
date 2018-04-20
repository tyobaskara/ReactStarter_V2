import React from 'react';
import { Helmet } from 'react-helmet';
import { HeroBanner } from './component/herobanner';

const Home = () => (
    <div>
        <Helmet>
            <title>Home - Prasetya Aji Baskara</title>
        </Helmet>

        <div className="container-fluid">
            <HeroBanner 
                title={<h1 className="title">Web Developer</h1>}
                subtitle={<h2 className="subtitle">Don't be afraid to be Great</h2>}
                images="./assets/images/herobanner-2.jpg" 
                altImages="tyobaskara" 
            />
        </div>
    </div>
)

export default Home;