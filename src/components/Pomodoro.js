import { useEffect, useState } from "react"


export const Pomodoro = () => {

    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [active, setActive] = useState(false)

    const startTimer = () => {
        setActive(true);
    }

    const pauseTimer = () => {
        setActive(false)
    }
    const resetTimer = () => {
        setActive(false)
        setMinutes(25)
        setSeconds(0)
    }

    useEffect(() => {
        let interval;
        if (active) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        resetTimer()
                    }
                    else {
                        setMinutes((prevMinutes) => prevMinutes - 1)
                        setSeconds(59)
                    }
                } else {
                    setSeconds((prevSeconds) => prevSeconds - 1)
                }
            }, 1000)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [active, minutes, seconds])







    return (
        <div className="pomodoro-container">
            <h1 style={{ color: 'cornflowerblue' }}>Pomodoro Timer</h1>
            <div className={`timer ${active ? 'active' : ''}`}>
                <span>{String(minutes).padStart(2, '0')}:</span>
                <span>{String(seconds).padStart(2, '0')}</span>
            </div>
            <div className="controls">
                <button onClick={startTimer} disabled={active}>
                    Start
                </button>
                <button onClick={pauseTimer} disabled={!active}>
                    Pause
                </button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
}
