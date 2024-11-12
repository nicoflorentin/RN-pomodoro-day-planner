import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { AlignJustify } from 'lucide-react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { Settings as SettingsIcon } from '~/lib/icons/Settings'
import useTaskStore from '~/features/store/tasks.state'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import { Button } from '../ui/button'

interface TaskElement {
  label: string
  value: string
}

const CustomBlackDropdown = ({ data }: { data: TaskElement[] }) => {
  // const [selectedTaskName, setSelectedTaskName] = useState("Select a task")
  const { removeTask, setCurrentTask, getCurrentTask } = useTaskStore((state) => state)

  const currentTask = getCurrentTask()

  const renderItem = (item: TaskElement) => {
    return (
      <View className="flex-row justify-between p-3 rounded-full">
        <Text>{item.label}</Text>
        <Pressable onPress={() => removeTask(item.value)}>
          <Text>X</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View className="flex-row justify-center items-center gap-5 self-stretch">
      <Dropdown
        data={data}
        placeholder={'Select a task'}
        placeholderStyle={{ color: 'white', fontWeight: 'bold' }}
        labelField={'label'}
        valueField={'value'}
        value={currentTask?.title}
        onChange={(item) => setCurrentTask(item.value)}
        style={{
					height: 50,
          width: 250,
          backgroundColor: 'gray',
          paddingVertical: 15,
          paddingRight: 20,
					paddingLeft: 20,
          borderRadius: 50,
        }}
        renderRightIcon={() => <AlignJustify color={'white'} />}
        renderItem={renderItem}
      />

      <Dialog className='absolute right-5'>
        <DialogTrigger className="" asChild>
          <Button variant="ghost">
            <SettingsIcon className="absolute" size={30} color={'black'} />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] border-8 border-black">
          <DialogHeader>
            <DialogTitle>Tutorial</DialogTitle>
            <DialogDescription>
              <Text className="text-center font-bold text-md">Haz lo que debes hacer, hazlo ya.</Text>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button>
                <Text>OK</Text>
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </View>
  )
}

export { CustomBlackDropdown }
