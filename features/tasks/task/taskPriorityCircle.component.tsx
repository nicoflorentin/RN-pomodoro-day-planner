import { Text, View } from 'react-native'
import React from 'react'
import { Priority } from '~/types'

interface TaskPriorityCircleProps {
  priority: Priority
}

const priorityToColor = (priority: Priority) => {
  switch (priority) {
    case Priority.HIGH:
      return 'bg-red-400'
    case Priority.MEDIUM:
      return 'bg-yellow-400'
    case Priority.LOW:
      return 'bg-green-400'
  }
}

const TaskPriorityCircle = ({ priority }: TaskPriorityCircleProps) => {
  return <View className={`${priorityToColor(priority)} w-10 h-10 rounded-full`} />
}

export { TaskPriorityCircle }
