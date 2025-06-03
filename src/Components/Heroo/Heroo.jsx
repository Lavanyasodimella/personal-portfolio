import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile_img from '../../assets/profile_img.png';
import './Heroo.css';
const Heroo = () => {
  return (
    <div id='home' className='heroo'>
    <img src={profile_img} alt="profile" width="300" height="300"/>
    <h1><span>I am Lavanya Sodimella</span></h1>
    <p>I am a Web Developer</p>
    <div className="heroo-action">
        <div className="heroo-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <div className="heroo-resume">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="anchor-link">My Resume</a></div>
        </div> 
    </div> 
  )
}

export default Heroo