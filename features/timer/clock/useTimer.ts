import { useCallback, useEffect, useRef, useState } from "react"

function useTimer(initialTime = 5) {
	// Initializes the timer state with the initial value
	const [currentTime, setCurrentTime] = useState(initialTime)
	const [isTimerActive, setIsTimerActive] = useState(false)

	console.log("currentTime", currentTime)

	// Creates a reference to the interval
	const timerIntervalRef = useRef<NodeJS.Timeout | null>(null)

	// Function to stop the timer
	const stopTimer = useCallback(() => {
		console.log("stop timer ()")
		if (timerIntervalRef.current) {
			clearInterval(timerIntervalRef.current)
			timerIntervalRef.current = null
		}
		setIsTimerActive(false)
	}, [])

	// Function to reset the timer
	const resetTimer = useCallback(() => {
		console.log("reset timer ()")
		stopTimer()
		setCurrentTime(initialTime)
	}, [initialTime, stopTimer])

	// Function to start the timer
	const startTimer = useCallback(() => {
		console.log("start timer ()")
		if (timerIntervalRef.current) return
		setIsTimerActive(true)
		timerIntervalRef.current = setInterval(() => {
			setCurrentTime((prevTime) => {
				if (prevTime === 1) {
					resetTimer()
					// returns 1 because setState callback can only return numbers
					return 1
				} else {
					return prevTime - 1
				}
			})
		}, 1000)
	}, [])

	useEffect(() => {
		return () => {
			stopTimer()
		}
	}, [stopTimer])

	return { currentTime, isTimerActive, startTimer, stopTimer, resetTimer }
}

export { useTimer }

