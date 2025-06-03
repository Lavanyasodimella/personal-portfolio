import './Projects.css';
const Projects = () => {
    return (
        <div id="projects" className="projects">
            <h2 className="section-heading">My Projects</h2>
            <div className="projects-list">
                <div className="project-card">
                    <h3>Portfolio Website</h3>
                    <p>A personal portfolio website built using React to showcase my skills, education, and projects.</p>
                    <a href="https://github.com/Lavanyasodimella/personal-portfolio.git" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                <div className="project-card">
                    <h3>Task Manager(Todo List)</h3>
                    <p>A full-stack task management app where users can add, edit, and delete tasks. Built using Flask and get notifications if they're deadline is come to an end.</p>
                    <a href="https://github.com/Lavanyasodimella/Task-manager.git" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
                <div className="project-card">
                    <h3>Recipe Explorer</h3>
                    <p>RecipeHub is a web app to search, browse, and view recipes with ingredients, instructions, and YouTube cooking videos.</p>
                    <a href="https://github.com/Lavanyasodimella/Recipe-explorer.git" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
            </div>
        </div>
    )
}

export default Projects