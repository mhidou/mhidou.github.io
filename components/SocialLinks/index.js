import React from 'react';
import LinkContent from '../LinkContent';
import FaGithub from 'react-icons/lib/fa/github';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import './sociallinks.less';

class SocialLinks extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="sociallinks">
        <LinkContent link="https://github.com/mhidou" ><FaGithub /></LinkContent>
        <LinkContent link="https://twitter.com/mehdi_ahraoui" ><FaTwitter /></LinkContent>
        <LinkContent link="https://www.facebook.com/mhidou.me" ><FaFacebook /></LinkContent>
      </div>
    )
  }
}

export default SocialLinks
