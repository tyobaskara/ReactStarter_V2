import React from 'react';
import { Helmet } from 'react-helmet';
import { HeroBanner } from './component/herobanner';

const About = () => (
    <div>
        <Helmet>
            <title>About - Prasetya Aji Baskara</title>
        </Helmet>

        <div className="container-fluid">
            <HeroBanner 
                title={<h1 className="title">About Me</h1>}
                subtitle={<h2 className="subtitle">Stay Foolish, Stay Hungry</h2>}
                images="./assets/images/herobanner-2.jpg" 
                altImages="tyobaskara" 
            />
        </div>
    </div>
)

export default About;