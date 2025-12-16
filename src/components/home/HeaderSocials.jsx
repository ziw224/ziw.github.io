import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SiGooglescholar } from "react-icons/si";

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/ziw224' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/zihan-wang02/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AElLoL1gCdE3Dt77VpXnDXxNKl1DmimJVtE4pmUKNutdWZB4Wqi_hQ-oHJa82iZwB1nDmAkRHgV4dsKefrIiRQ&user=pNzjDE4AAAAJ' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiGooglescholar />
            </a>

            {/* <a href='https://www.twitter.com/GregSithole' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a> */}
        </div>
    );
};

export default HeaderSocials;
