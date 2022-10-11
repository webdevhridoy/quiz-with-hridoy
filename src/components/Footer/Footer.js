import { faGrinStars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-violet-700 py-20 static w-full bottom-0'>
            <div>
                <h2 className='text-white'>Copyright © 2022 | Quiz With Hridoy. All rights reserved</h2>
                <div>
                    <FontAwesomeIcon className='text-white' icon={faGrinStars}></FontAwesomeIcon>
                </div>
            </div>

        </div>
    );
};

export default Footer;