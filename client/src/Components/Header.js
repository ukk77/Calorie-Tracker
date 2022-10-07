import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/header.css'
import MenuIcon from '@mui/icons-material/Menu';


Header.propTypes = {
    
};

function Header(props) {

    

    return (
        <div className='headerContainer'>
            <div className='headerSubContainer'>
                <div className='buttonContainer'>
                    <div className='menuButton'>
                        <MenuIcon color='disabled' fontSize='large' onClick={props.handleShowNav} />
                        
                    </div>
                </div>
                <div className='textContainer'>
                    <div className='subTextContainer'>
                        Calorie Counter
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;