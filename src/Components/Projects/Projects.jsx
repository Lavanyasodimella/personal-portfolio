import './Projects.css';
const Projects = () => {
    return (
        <div id="projects" className="projects">
            <h2 className="section-heading">My Projects</h2>
            <div className="projects-list">
                <div className="project-card">
                    <h3>Portfolio Website</h3>
                    <p>A personal portfolio website built using React to showcase my skills, education, and projects.</p>
                    <a href="https://github.com/KrishnaManikantaUngarala/Portfolio-My" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                <div className="project-card">
                    <h3>Task Manager(Todo List)</h3>
                    <p>A full-stack task management app where users can add, edit, and delete tasks. Built using React.js for the frontend and PostgreSQL for data storage.</p>
                    <a href="https://github.com/KrishnaManikantaUngarala/todo-next-proj" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                <div className="project-card">
                    <h3>Recipe Explorer</h3>
                    <p>Developed a deep learning model using Convolutional Neural Networks (CNN) to detect brain tumors from MRI images. Trained on medical imaging datasets with high accuracy and performance metrics.</p>
                    <a href="https://github.com/KrishnaManikantaUngarala/braintumor-proj" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
                <div className="project-card">
                    <h3>Vehicle Management System</h3>
                    <p>Created a Flask-based web application to manage vehicle records, including features like vehicle registration, updates, deletions, and database integration using SQLAlchemy.</p>
                    <a href="https://github.com/KrishnaManikantaUngarala/VehicleMangementSystem-proj" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
            </div>
        </div>
    )
}

export default Projects