import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description : string;
    amount : number;
}

interface ChallengesContextsData{
    level: number;
    currentExperience : number; 
    experienceToNextLevel : number;
    challengesCompleted : number; 
    activeChallenge : Challenge;
    levelUp : () => void;
    startNewChallenge : () => void;
    resetChallenge : () => void;
}

interface ChallengesProviderProps{
    children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengesContextsData);

export const ChallengesProvider = ({children} : ChallengesProviderProps) =>{
    const [level, setLevel] = useState(1);
    const [currentExperience, setcurrentExperience] = useState(3)
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    const levelUp= () => {
      setLevel(level+1)
    }

    const startNewChallenge = () =>{
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    }

    const resetChallenge = () => {
        setActiveChallenge(null)
    }

    return(
        <ChallengeContext.Provider 
            value={{
                level, 
                currentExperience, 
                challengesCompleted, 
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel
            }}
        >
            {children}
        </ChallengeContext.Provider>
    )
}