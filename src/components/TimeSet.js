import React, { useState, useEffect } from 'react';

export const TimeSet = ({ task }) => {

    const [currentTime, setCurrentTime] = useState(new Date());
    const [alarmStartTime, setAlarmStartTime] = useState(
        localStorage.getItem(`alarmStartTime-${task.id}`) || ''
    );
    const [alarmEndTime, setAlarmEndTime] = useState(
        localStorage.getItem(`alarmEndTime-${task.id}`) || ''
    );
    const [isAlarmSet, setIsAlarmSet] = useState(
        localStorage.getItem(`isAlarmSet-${task.id}`) === 'true'
    );
    const [hasStarted, setHasStarted] = useState(false); // Add this line

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (isAlarmSet) {
            const alarmInterval = setInterval(() => {
                const now = new Date();
                const startDateTime = new Date(alarmStartTime);
                const endDateTime = new Date(alarmEndTime);

                if (now >= startDateTime && !hasStarted) {
                    alert(`Alarm for task "${task.name}"! It's time to start!`);
                    setHasStarted(true);
                }

                if (now >= endDateTime) {
                    alert(`Alarm for task "${task.name}"! It's time to end!`);
                    setIsAlarmSet(false);
                    clearInterval(alarmInterval);
                }
            }, 1000);

            // Check if it's the initial render and reset localStorage
            if (!hasStarted) {
                localStorage.setItem(`isAlarmSet-${task.id}`, 'false');
                return () => clearInterval(alarmInterval);
            }
        }
    }, [isAlarmSet, alarmStartTime, alarmEndTime, task, hasStarted]);

    const handleSetAlarm = () => {
        const [startHours, startMinutes] = alarmStartTime.split(':');
        const [endHours, endMinutes] = alarmEndTime.split(':');

        const newAlarmStartTime = new Date();
        newAlarmStartTime.setHours(parseInt(startHours, 10), parseInt(startMinutes, 10), 0, 0);

        const newAlarmEndTime = new Date();
        newAlarmEndTime.setHours(parseInt(endHours, 10), parseInt(endMinutes, 10), 0, 0);

        localStorage.setItem(`alarmStartTime-${task.id}`, newAlarmStartTime.toISOString());
        localStorage.setItem(`alarmEndTime-${task.id}`, newAlarmEndTime.toISOString());
        localStorage.setItem(`isAlarmSet-${task.id}`, 'true');

        setAlarmStartTime(newAlarmStartTime);
        setAlarmEndTime(newAlarmEndTime);
        setIsAlarmSet(true);
        setHasStarted(false); // Reset hasStarted when setting a new alarm
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Set Your Alarm</h1>
            <div style={styles.clockContainer}>
                <p style={styles.currentTime}>Current Time: {currentTime.toLocaleTimeString()}</p>
                <label style={styles.alarmLabel}>
                    Set Alarm Time Range:
                    <input
                        type="time"
                        value={alarmStartTime}
                        onChange={(e) => setAlarmStartTime(e.target.value)}
                        style={styles.alarmInput}
                    />
                    {' - '}
                    <input
                        type="time"
                        value={alarmEndTime}
                        onChange={(e) => setAlarmEndTime(e.target.value)}
                        style={styles.alarmInput}
                    />
                </label>
                <button onClick={handleSetAlarm} style={styles.setAlarmButton}>
                    Set Alarm
                </button>
                {isAlarmSet && (
                    <p style={styles.setAlarmTime}>
                        Alarm Set from: {new Date(alarmStartTime).toLocaleTimeString()} to{' '}
                        {new Date(alarmEndTime).toLocaleTimeString()}
                    </p>
                )}
            </div>
        </div>
    );
};


const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        width: '300px',
        margin: 'auto',
        marginTop: '50px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
        fontSize: '24px',
        marginBottom: '20px',
        color: '#333',
    },
    clockContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    currentTime: {
        fontSize: '16px',
        marginBottom: '10px',
    },
    alarmLabel: {
        fontSize: '16px',
        marginBottom: '10px',
    },
    alarmInput: {
        fontSize: '14px',
        padding: '5px',
    },
    setAlarmButton: {
        fontSize: '16px',
        padding: '8px 15px',
        backgroundColor: '#4caf50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    setAlarmTime: {
        fontSize: '16px',
        marginTop: '10px',
    },
};