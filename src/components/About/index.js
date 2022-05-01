import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

const About = () => {

    // React.createElement('div', {} [])
    // every JSX line is appended to an array as
    // an object
    // React.createElement('h1', {}, 'Who am I?')

    return(
        <section className='my-5'>
            <h1 id='about'>Who am I?</h1>
            <img src={coverImage} className='my-2' style={{ width: '100%'}} alt='cover' />
        </section>
    )
};

export default About;