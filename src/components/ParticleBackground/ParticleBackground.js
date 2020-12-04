import React from 'react';
import Particles from 'react-particles-js';

import './Particles.css';

const ParticleBackground = ({
    child: Component,
    ...rest
}) => {
    return (
        <>
            <Particles
                className='particles'
                params={{
                    background: {
                        color: {
                            // value: '#1e1b18',
                            value: '#fff',
                        },
                        // opacity: 0.3,
                    },
                    particles: {
                        color: {
                            value: '#d8315b',
                        },

                        number: {
                            density: {
                                enable: true,
                                value_area: 600,
                            },
                            value: 134,
                        },
                        size: {
                            value: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        links: {
                            color: '#0a2463',
                            distance: 80,
                            enable: true,
                            opacity: 0.8,
                            width: 1,
                        },
                    },
                    fpsLimit: 60,
                    detectRetina: true,
                }}
            />
            <Component />
        </>
    );
};

export default ParticleBackground;
