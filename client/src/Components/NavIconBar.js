import React, { useState } from 'react';
import '../css/NavIconBar.css';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TimelineIcon from '@mui/icons-material/Timeline';
import LogoutIcon from '@mui/icons-material/Logout';
import TableChartIcon from '@mui/icons-material/TableChart';
function NavIconBar(props) {
    const [activeLink, setActiveLink] = useState([true, false, false, false, false])
    const handleActiveLinks = (e, index) => {
        let arr = [false, false, false, false, false]
        arr[index] = true
        setActiveLink(arr)
    }
    return (
        <div className= {props.shownav? 'navBarIconContainerText' : 'navBarIconContainer'}>
            <div className= {props.shownav? '' : 'navBarIconsubContainer'}>
                <div className= {props.shownav? 'IconDivText ' + activeLink[0] : 'IconDiv ' + activeLink[0]} onClick={e => handleActiveLinks(e, 0)}>
                    <div className= {props.shownav? 'HomeIconText IconContainerText' : 'HomeIcon IconContainer'} ><HomeIcon fontSize="large" className='Icon' /> </div>
                    { props.shownav? <div className={props.shownav? 'HomeIconText TextContainer' : ''} >Home</div> : null}
                </div>
                <div className={props.shownav? 'IconDivText ' + activeLink[1] : 'IconDiv ' + activeLink[1]} onClick={e => handleActiveLinks(e, 1)}>
                    <div className= {props.shownav? 'FitnessIconText IconContainerText' : 'FitnessIcon IconContainer'} ><TableChartIcon fontSize="large" className='Icon' /> </div>
                    { props.shownav? <div className= {props.shownav? 'FitnessIconText TextContainer' : ''} >Food Data</div> : null}
                </div>
                <div className={props.shownav? 'IconDivText ' + activeLink[2]: 'IconDiv ' + activeLink[2]} onClick={e => handleActiveLinks(e, 2)}>
                    <div className= {props.shownav? 'AnalyticsIconText IconContainerText' : 'AnalyticsIcon IconContainer' } ><AnalyticsIcon fontSize="large" className='Icon' /> </div>
                    { props.shownav? <div className= {props.shownav? 'AnalyticsIconText TextContainer' : '' } >Analytics</div> : null}
                </div>
                <div className={props.shownav? 'IconDivText ' + activeLink[3] : 'IconDiv ' + activeLink[3]} onClick={e => handleActiveLinks(e, 3)}>
                    <div className= {props.shownav? 'TimeLineIconText IconContainerText' : 'TimeLineIcon IconContainer'} ><TimelineIcon fontSize="large" className='Icon' /> </div>
                    { props.shownav? <div className= {props.shownav? 'TimeLineIconText TextContainer' : ''} >TimeLine</div> : null}
                </div>
                <div className={props.shownav? 'IconDivText ' + activeLink[4] : 'IconDiv ' + activeLink[4]} onClick={e => handleActiveLinks(e, 4)}>
                    <div className= {props.shownav? 'ManageAccountIconText IconContainerText' : 'ManageAccountIcon IconContainer'} ><ManageAccountsIcon fontSize="large" className='Icon' /> </div>
                    { props.shownav? <div className= {props.shownav? 'ManageAccountIconText TextContainer' : ''} >Manage Account</div> : null}
                </div>
                <div className={props.shownav? 'IconDivText' : 'IconDiv'}>
                    <div className= {props.shownav? 'LogoutIconText IconContainerText' : 'LogoutIcon IconContainer' }><LogoutIcon fontSize="large" className='Icon' /></div> 
                    { props.shownav? <div className= {props.shownav? 'LogoutIconText TextContainer' : ''} >Logout</div> : null}
                </div>
            </div>
        </div>
    );
}

export default NavIconBar;