import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ChevronDown } from '~/lib/icons/ChevronDown'
import useTaskStore from '~/features/store/tasks.state'
import { Task } from '~/features/tasks'
import { CreateTaskDialog } from '~/features/tasks/dialogs'

const Tasks = () => {
  const { tasks, addHardcodedTask } = useTaskStore((state) => state)

  return (
    <View className="gap-3">
      {tasks.map((task) => (
        <Task key={task.id} task={task}></Task>
      ))}

      {/* add task button */}
      <View className="bg-black rounded-xl py-1">
        <CreateTaskDialog></CreateTaskDialog>
      </View>
      {/* <Pressable onPress={() => addHardcodedTask()} className="bg-black rounded-xl py-1">
        <Text className="text-4xl color-white font-bold text-center">+</Text>
      </Pressable> */}
    </View>
  )
}

export default Tasks

const styles = StyleSheet.create({})
