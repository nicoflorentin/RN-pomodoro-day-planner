import { useCallback, useEffect, useRef, useState } from "react"

const defaultOnTimeEnd = () => {
	console.log("Time's up!")
}

function useTimer(initialTime = 3, onTimeEnd: () => void = defaultOnTimeEnd) {
	// Initializes the timer state with the initial value
	const [currentTime, setCurrentTime] = useState(initialTime)
	const [isTimerActive, setIsTimerActive] = useState(false)

	useEffect(() => {
		if (currentTime === 0) {
			resetTimer()
			onTimeEnd()
		}
	}, [currentTime])

	// Monitors if `initialTime` changes and updates the time
	useEffect(() => {
		setCurrentTime(initialTime)
	}, [initialTime])

	// Creates a reference to the interval
	const timerIntervalRef = useRef<NodeJS.Timeout | null>(null)

	// Function to stop the timer
	const stopTimer = useCallback(() => {
		console.log("Stopping timer")
		if (timerIntervalRef.current) {
			clearInterval(timerIntervalRef.current)
			timerIntervalRef.current = null
		}
		setIsTimerActive(false)
	}, [])

	// Function to reset the timer
	const resetTimer = useCallback(() => {
		console.log("Resetting timer")
		stopTimer()
		setCurrentTime(initialTime)
	}, [initialTime, stopTimer])

	// Function to start the timer
	const startTimer = useCallback(() => {
		console.log("Starting timer")
		if (timerIntervalRef.current) return
		setIsTimerActive(true)
		timerIntervalRef.current = setInterval(() => {
			setCurrentTime((prevTime) => prevTime - 1)
		}, 50)
	}, [])

	return { currentTime, isTimerActive, startTimer, stopTimer, resetTimer }
}

export { useTimer }