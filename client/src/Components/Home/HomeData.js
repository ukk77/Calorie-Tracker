import React from 'react';
import Card from '../Card';
import '../../css/HomeData.css';

function HomeData(props) {
    return (
        <div className='HomeDataContainer'>
            <div className='HomeDataSubContainer'>
                <div className='horizontalcontainer'>
                    <Card heading={"Daily Calorie target"} value={'n1'}/>
                    <Card heading={"Calories consumed today"} value={'n2'}/>
                </div>
                <div className='horizontalcontainer'>
                    <Card heading={"Calorie burned today"} value={'n3'}/>
                    <Card heading={"Current Weight"} value={'n4'}/>
                </div>
            </div>
        </div>
    );
}

export default HomeData;