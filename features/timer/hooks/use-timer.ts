import { useCallback, useEffect, useRef, useState } from "react"

function useTimer(initialTime = 3000) {
	// Inicializa el estado del timer con el valor inicial
	const [currentTime, setCurrentTime] = useState(initialTime)
	const [isTimerActive, setIsTimerActive] = useState(false)

	// Crea una referencia para el intervalo
	const timerIntervalRef = useRef<NodeJS.Timeout | null>(null)

	// Función para iniciar el timer
	const startTimer = useCallback(() => {
		if (timerIntervalRef.current) return

		setIsTimerActive(true)
		timerIntervalRef.current = setInterval(() => {
			setCurrentTime((prevTime) => prevTime - 1)
		}, 1000)
	}, [])

	// Función para parar el timer
	const stopTimer = useCallback(() => {
		if (timerIntervalRef.current) {
			clearInterval(timerIntervalRef.current)
			timerIntervalRef.current = null
		}
		setIsTimerActive(false)
	}, [])

	// Función para resetear el timer
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

