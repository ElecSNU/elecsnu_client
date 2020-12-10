import React from 'react';

import Megha from '../../assets/images/megha.png';
import Ishit from '../../assets/images/ishit.png';
import Yashi from '../../assets/images/yashi.png';
import Kaustubh from '../../assets/images/kaustubh.png';

import './AboutUs.css';

const TeamMateCard = ({ details }) => {
    return (
        <div
            className={`teammate-card background-${details.background} border-radius-15 box-shadow`}
        >
            <img
                src={details.image}
                alt=''
                className='teammate-img'
            />
            <h1 className='teammate-name heading-text capital-text foreground-light'>
                {details.name}
            </h1>
            <div className='divider'></div>
            <h1 className='teammate-name subheading-text capital-text foreground-light'>
                {details.designation}
            </h1>
        </div>
    );
};

const AboutUs = () => {
    const teammates = [
        {
            image: Megha,
            name: 'Megha Agarwal',
            designation: 'DESIGNER',
            background: 'accent1',
        },
        {
            image: Ishit,
            name: 'Ishit Beswal',
            designation: 'Coder',
            background: '1',
        },
        {
            image: Yashi,
            name: 'Yashi Jain',
            designation: 'Coder',
            background: '1',
        },
        {
            image: Kaustubh,
            name: 'Kaustubh Rai',
            designation: 'Tester',
            background: 'accent2    ',
        },
    ];

    return (
        <div id='about-us'>
            <div className='about-us-container border-radius-15 box-shadow background-light-translucent'>
                <div className='about-us-heading heading-text background-dark border-radius-15 foreground-light center-text'>
                    OUR TEAM
                </div>
                <div className='teammates'>
                    {teammates.map((teammate, index) => {
                        return (
                            <TeamMateCard
                                key={index}
                                details={teammate}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
