import call_icon from '../../assets/call_icon.svg'
import git_icon from '../../assets/git_icon.png'
import lin_icon from '../../assets/lin_icon.png'
import location_icon from '../../assets/location_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
import './Contact.css'
const Contact = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key",  import.meta.env.VITE_WEB3FORMS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="theme pattern" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <p>I’m always open to new opportunities, feedback, or networking—drop me a message!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="mail icon" /><p>sodimellalavanya@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="call icon" /><p>+91-7013666565</p>
                    </div>
                     <div className="contact-detail">
                        <img src={git_icon} alt="" /><p>https://github.com/Lavanyasodimella</p>
                    </div>
                     <div className="contact-detail">
                        <img src={lin_icon} alt="" /><p>https://www.linkedin.com/in/lavanya-sodimella-7ba6712a3</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="location icon" /><p>Andhara Pradesh,India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit}  className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='enter your email' name='email'/>
                <label htmlFor="">write your message here</label>
                <textarea name="message" cols="9" rows="8" placeholder='enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact