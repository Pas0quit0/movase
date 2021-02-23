import styles from '../styles/components/Profile.module.css'

const Profile = () => {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Pas0quit0.png" alt="Marcos Arthur"/>
            <div>
                <strong>Marcos Arthur</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}

export default Profile;