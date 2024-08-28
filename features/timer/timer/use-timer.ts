import { useCallback, useEffect, useRef, useState } from "react"

type UseTimerReturn = {
	currentTime: number
	isTimerActive: boolean
	startTimer: () => void
	stopTimer: () => void
	resetTimer: () => void
}

function useTimer(initialTime = 3000): UseTimerReturn {
	const [currentTime, setCurrentTime] = useState<number>(initialTime)
	const [isTimerActive, setIsTimerActive] = useState<boolean>(false)

	const timerIntervalRef = useRef<NodeJS.Timeout | null>(null)

	const startTimer = useCallback(() => {
		if (timerIntervalRef.current) return
		setIsTimerActive(true)
		timerIntervalRef.current = setInterval(() => {
			setCurrentTime((prevTime) => prevTime - 1)
		}, 1000)
	}, [])

	const stopTimer = useCallback(() => {
		if (timerIntervalRef.current) {
			clearInterval(timerIntervalRef.current)
			timerIntervalRef.current = null
		}
		setIsTimerActive(false)
	}, [])

	const resetTimer = useCallback(() => {
		stopTimer()
		setCurrentTime(initialTime)
	}, [initialTime, stopTimer])

	useEffect(() => {
		return () => {
			stopTimer()
		}
	}, [stopTimer])

	return { currentTime, isTimerActive, startTimer, stopTimer, resetTimer }
}

export { useTimer }

