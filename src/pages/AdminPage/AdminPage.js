import { useState } from "react";
import "./AdminPage.css"; 

function AdminPage() {
    // List of projects with mockdata (in a real app, this would come from a backend db)
    const [projects, setProjects] = useState([
        { id: 1, name: "Smart City Solution", votes: 142 },
        { id: 2, name: "AI Health Assistant", votes: 118 },
        { id: 3, name: "Eco-Friendly Packaging", votes: 96 },
        { id: 4, name: "Autonomous Delivery Drone", votes: 87 },
        { id: 5, name: "Virtual Reality Education", votes: 73 },
        { id: 6, name: "Blockchain Supply Chain", votes: 65 },
        { id: 7, name: "Renewable Energy Grid", votes: 54 },
        { id: 8, name: "Digital Identity Platform", votes: 42 },
        { id: 9, name: "Smart Agriculture System", votes: 37 },
        { id: 10, name: "Waste Management Solution", votes: 28 },
    ]);

    // This function removes a project when the Delete button is clicked
    const handleDelete = (id) => {
        // Filter out the project with the matching id
        const updatedProjects = projects.filter(project => project.id !== id);
        // Update the list of projects
        setProjects(updatedProjects);
    };

    // ranking numbers (1st, 2nd, 3rd, etc.)
    const getRankSuffix = (rank) => {
        if (rank === 1) return "st";
        if (rank === 2) return "nd";
        if (rank === 3) return "rd";
        return "th";
    };

    // The HTML structure that will be displayed on the page
    return (
        <div className="admin-page">
            <h1 className="admin-page_title">Projects Leaderboard</h1>
            
            {/* message if there are no projects */}
            {projects.length === 0 ? (
                <div className="no-projects">
                    <p>No projects available.</p>
                </div>
            ) : (
                /* Otherwise show the leaderboard */
                <div className="leaderboard">
                    {/* Header row with column titles */}
                    <div className="leaderboard_header">
                        <div className="header_rank">Rank</div>
                        <div className="header_name">Project Name</div>
                        <div className="header_votes">Votes</div>
                        <div className="header_actions">Actions</div>
                    </div>
                    
                    {/* List of projects */}
                    {projects.map((project, index) => {
                        const rank = index + 1;
                        return (
                            <div 
                                key={project.id} 
                                className={`team rank-${rank} ${rank <= 3 ? 'top-three' : ''}`}
                            >
                                {/* Rank column */}
                                <div className="leaderboard_rank">
                                    <span>{rank}{getRankSuffix(rank)}</span>
                                </div>
                                
                                {/* Project name column */}
                                <div className="leaderboard_name">
                                    {project.name}
                                </div>
                                
                                {/* Votes column */}
                                <div className="leaderboard_votes">
                                    {project.votes}
                                </div>
                                
                                {/* column with buttons */}
                                <div className="leaderboard_actions">
                                    <button className="action-btn edit-btn">
                                        Edit
                                    </button>
                                    <button 
                                        className="action-btn delete-btn"
                                        onClick={() => handleDelete(project.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default AdminPage;