const ExperienceBar = () =>{
    return(
        <header className="experience-bar">
            <span>0 XP</span>
            <div>
                <div style={{width: '50%'}}></div>

                <span className="current-experience" style={{left: "50%"}}>300xp</span>
            </div>
            <span>600 XP</span>
        </header>
    )
}

export default ExperienceBar;