import { Button, Pressable, Text, View } from 'react-native'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useTimer } from '~/features/timer'
import { PlayPause, Timer } from '~/features/timer'
import { ThreeIconsTaskState } from '~/features/timer'
import { Circles } from '~/features/tasks'
import { FloatingUpperBar } from '~/components/floating-upperbar/floating-upperbar.component'
import { PomodoroStage } from '~/types'
import useTimerStore from '~/features/store/timer.state'
import useTaskStore from '~/features/store/tasks.state'
import { CustomBlackDropdown } from '~/components/black-dropdown/black-dropdown.component'

const Pomodoro = () => {
  const { tasks, completeTaskPeriod, currentTaskId, getCurrentTask } = useTaskStore((state) => state)
  const { setCurrentStage, currentStage, stagesConfig } = useTimerStore((state) => state)

  const currentTask = getCurrentTask()

  const taskStore = useTaskStore((state) => state)
  console.log('task store', taskStore)

  const onTimerEnd = useCallback((): void => {
    if (
      currentTask &&
      currentStage === PomodoroStage.FOCUS &&
      currentTask.currentPeriod + 1 > currentTask.periodsQuantity
    ) {
      setCurrentStage(PomodoroStage.LONG_BREAK)
      completeTaskPeriod(currentTaskId)
    } else if (currentStage === PomodoroStage.FOCUS) {
      completeTaskPeriod(currentTaskId)
      setCurrentStage(PomodoroStage.BREAK)
      console.log('entro al if')
    } else if (currentStage === PomodoroStage.BREAK) {
      setCurrentStage(PomodoroStage.FOCUS)
    } else if (currentStage === PomodoroStage.LONG_BREAK) {
      setCurrentStage(PomodoroStage.FOCUS)
    }
  }, [currentStage, setCurrentStage, tasks, completeTaskPeriod, currentTask])

  const { currentTime, startTimer, stopTimer, resetTimer, isTimerActive } = useTimer(
    stagesConfig[currentStage],
    onTimerEnd
  )

  useEffect(() => {
    stopTimer()
    resetTimer()
  }, [currentStage, stopTimer, resetTimer])

  useEffect(() => {
    stopTimer()
    resetTimer()
    setCurrentStage(PomodoroStage.FOCUS)
  }, [currentTaskId])

  const selectedTask = tasks.find((task) => task.id === currentTaskId)

  const tasksData = tasks.map((task) => ({
    label: task.title,
    value: task.id,
  }))

  return (
    <View className="items-center grow gap-16 py-3">
      {/* <FloatingUpperBar /> */}
      <CustomBlackDropdown data={tasksData} />
      <View className="items-center h-[100px]">
        {/* SELECTED TASK TITLE */}
        <Text className='text-xl font-bold'>{currentTask?.title}</Text>
        <Timer currentTime={currentTime} />
        {currentTask ? <Circles task={currentTask} /> : null}

        {/* DEBUG ON SCREEN INFO */}
        {/* <View>
          <Text>{selectedTask?.title}</Text>
          <Text>current stage {currentStage}</Text>
          <Text>current period {tasks.length && currentTask?.currentPeriod}</Text>
          <Text>total periods {tasks.length && currentTask?.periodsQuantity}</Text>
        </View> */}
        {/* END OF DEBUG ON SCREEN INFO */}
      </View>
      <PlayPause
        resetTimer={resetTimer}
        isTimerActive={isTimerActive}
        stopTimer={stopTimer}
        startTimer={startTimer}
      />
      {/* <Pressable onPress={() => completeTaskPeriod(currentTaskId)}>
        <Text>complete period</Text>
      </Pressable> */}
      <ThreeIconsTaskState stage={currentStage} />
    </View>
  )
}

export default Pomodoro
