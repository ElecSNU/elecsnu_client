import React from 'react';

import './HomeArt.css';

import homeArt from '../../assets/images/home-art.svg';
import sc1 from '../../assets/images/scroll_1.png';
import sc2 from '../../assets/images/scroll_2.png';
// import gfont from 'https://fonts.googleapis.com/css?family=Montserrat' 

const HomePage = () => {
   
    return (
        <>
            <div
                id='home'
                style={{
                    width: '100%',
                    height: '100vh',
                    backgroundColor: '#004aad'
                }}
            >
                <div className='voting-banner' >
                        <h1  style={{
                        // fontFamily: "Montserrat"
                    }}>LET'S MAKE VOTING FUN!</h1>
                        <br/>
                        <h4 >
                            A step towards secure and intuitive digital voting 
                        </h4>

                </div>
                <div className='home-art'>
                    <img src={homeArt} alt='home-art' />
                </div>
            </div>
            {/* <div className='sc1'> */}
                <h1>All about online voting systems</h1>     
            {/* </div>s */}
            <div className='sc1'>
                <img src={sc1} alt='sc1' />    
            </div>
            <div className='sc1'>
                <img src={sc2} alt='sc1' />    
            </div>
            
        </>
    );
};

export default HomePage;
