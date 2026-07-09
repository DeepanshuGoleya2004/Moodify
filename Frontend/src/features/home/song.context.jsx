import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {

    const [ song, setSong ] = useState({
        "url": "https://ik.imagekit.io/qrht6cthu/cohort-2/moodify/songs/BLACK_RIDE__RiskyjaTT.CoM__oDshCMrYw.mp3",
        "posterUrl": "https://ik.imagekit.io/qrht6cthu/cohort-2/moodify/posters/BLACK_RIDE__RiskyjaTT.CoM__0Ta62FqYf.jpeg",
        "title": "BLACK RIDE (RiskyjaTT.CoM)",
        "mood": "happy",
    })

    const [ loading, setLoading ] = useState(false)

    return (
        <SongContext.Provider
            value={{ loading, setLoading, song, setSong }}
        >
            {children}
        </SongContext.Provider>
    )

}