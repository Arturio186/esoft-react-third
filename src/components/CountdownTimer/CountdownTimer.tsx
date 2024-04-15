import React, { useEffect, useState } from "react";
import './CountdownTimer.scss'

import ICountdownTimerProps from "#interfaces/props/ICountdownTimerProps";

const CountdownTimer : React.FC<ICountdownTimerProps> = ({ timerStart }) => {
    const [timerValue, setTimerValue] = useState<number>(timerStart)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimerValue(timerValue - 1)
        }, 1000)

        if (timerValue === 0) {
            clearInterval(interval)
        }
    
        return () => clearInterval(interval) 
        
    }, [timerValue])    
    

    return (
        <>
            <p className="timer__count">
                Таймер: {timerValue}
            </p>
        </>
        
    )
}

export default CountdownTimer;