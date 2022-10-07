import React from 'react';
import '../../css/Home.css';
import HomeData from './HomeData';
import HomeDataAdder from './HomeDataAdder';
function Home(props) {
    return (
        <div className='content'>
            <div className='HomeContainer'>
                <div className='HomeSubContainer'>
                    <div className='staticDataContainer'>
                        <div className='staticDataSubContainer'>
                            <HomeData/>
                        </div>
                    </div>
                    <div className='userInteractionContainer'>
                        <div className='userInteractionSubContainer'>
                            <HomeDataAdder/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;