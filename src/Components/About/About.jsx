import about_profile from '../../assets/about_profile.png'
import './About.css'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About<span>Me</span></h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={about_profile} alt="profile" width="400" height="400" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a curious and creative web developer with a passion for building clean, user-friendly applications. I enjoy learning new technologies and solving problems through code. With a focus on simplicity and functionality, I aim to create smooth and engaging user experiences. I'm always exploring ways to improve and grow as a developer.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML&CSS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>JAVA</p><hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>C&C++</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>REACT JS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>JAVASCRIPT</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>MYSQL & MONGODB</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className='education-heading'><h2>Education Details</h2></div>
            <table className="education-table">
                <thead>
                    <tr>
                        <th>Qualification</th>
                        <th>Institution</th>
                        <th>Board/University</th>
                        <th>Year</th>
                        <th>Percentage/CGPA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>10th</td>
                        <td>Sri Surya High Shool</td>
                        <td>State Board</td>
                        <td>2020</td>
                        <td>96%</td>
                    </tr>
                    <tr>
                        <td>12th/Intermediate</td>
                        <td>Sri Chaitanya Junior College</td>
                        <td>State Board</td>
                        <td>2022</td>
                        <td>95%</td>
                    </tr>
                    <tr>
                        <td>B.Tech in CSE</td>
                        <td>SRI VASAVI ENGINEERING COLLEGE</td>
                        <td>Jawaharlal Nehru University</td>
                        <td>2022–2026</td>
                        <td>8.56 CGPA</td>
                    </tr>
                </tbody>
            </table>
            <div className="about-achivements">
                <div className="about-achievement">
                    <p>Recieved Microsoft Global Certified Certificate:Azure AI Fundamentals</p>
                </div>
                <hr></hr>
                <div className="about-achievement">
                    <p>Achieved MongoDB Associate Developer Certification (Java) from MongoDB University</p>
                </div>
                <hr></hr>
                <div className="about-achievement">
                    <p>Recieved Nptel Certificate from IIT's for the course completion of Data structures using Java</p>
                </div>
            </div>
        </div>
    )
}

export default About