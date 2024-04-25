import React, { useEffect, useState } from "react";
import './CountdownTimer.scss'

import ICountdownTimerProps from "#interfaces/props/ICountdownTimerProps";

const CountdownTimer : React.FC<ICountdownTimerProps> = ({ timerStart }) => {
    const [timerValue, setTimerValue] = useState<number>(timerStart)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimerValue(prev => {
                if (prev === 0) {
                    clearInterval(interval)
                    return prev
                }
                else {
                    return prev - 1
                }
            })
        }, 1000)
    
        return () => clearInterval(interval) 
    }, [])    
    

    return (
        <>
            <p className="timer__count">
                Таймер: {timerValue}
            </p>
        </>
        
    )
}

export default CountdownTimer;