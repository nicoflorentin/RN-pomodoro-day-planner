import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Task as TaskType } from '~/types';
import { ChevronDown } from '~/lib/icons/ChevronDown';
import {TaskPriorityCircle} from "~/features/tasks/task";

interface TaskProps {
  task: TaskType;
}

const Task = ({ task }: TaskProps) => {
  return (
    <View key={task.id} className="border rounded-xl px-5 py-2 flex-row h-[80px] items-center">
      {/* color priority circle */}
			<TaskPriorityCircle priority={task.priority} />
      {/* buttons and taskname container */}
      <View className="m-auto gap-1">
        <Text className="text-center">{task.title}</Text>
        <View className="flex-row gap-3">
          <Pressable className="border self-start py-2 px-4 rounded-xl">
            <Text>EDIT</Text>
          </Pressable>
          <Pressable className="border self-start py-2 px-4 rounded-xl">
            <Text>RESET</Text>
          </Pressable>
          <Pressable className="bg-red-400 self-start py-2 px-4 rounded-xl">
            <Text className="color-white">DELETE</Text>
          </Pressable>
        </View>
      </View>
      {/* menu button */}
      <ChevronDown size={23} color={'black'} strokeWidth={3} />
    </View>
  );
};

export { Task };
