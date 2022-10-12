import React from "react";

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const styles = {
  fontSize: 35,
  margin: '0 20px'
}

const Footer = () => {
  return (
    <div className="footer text-center py-5">
      <div className="pb-4 text-white">Copy Right @codewithreach</div>
      <div className="text-white">
        <div className="f-icons">
          <FacebookIcon sx={styles} />
          <GitHubIcon sx={styles}/>
          <InstagramIcon sx={styles}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;