import { Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import { ChevronDown } from "~/lib/icons/ChevronDown"

const Tasks = () => {
	return (
		<View className='gap-3'>
			{/* task container  */}
			<View className='border rounded-xl px-5 py-2 flex-row h-[80px] items-center'>
				{/* color priority circle */}
				<View className='bg-green-400 w-10 h-10 rounded-full'></View>
				{/* circles and taskname container */}
				<View className='m-auto gap-1'>
					<View className='flex-row gap-2'>
						<View className='w-5 h-5 bg-black border rounded-full'></View>
						<View className='w-5 h-5 bg-black border rounded-full'></View>
						<View className='w-5 h-5 bg-black border rounded-full'></View>
						<View className='w-5 h-5 bg-white border rounded-full'></View>
						<View className='w-5 h-5 bg-white border rounded-full'></View>
					</View>
					<Text>do my homework</Text>
				</View>
				{/* menu button */}
				<ChevronDown size={23} color={"black"} strokeWidth={3} />
			</View>
			{/* task container  */}
			<View className='border rounded-xl px-5 py-2 flex-row h-[80px] items-center'>
				{/* color priority circle */}
				<View className='bg-green-400 w-10 h-10 rounded-full'></View>
				{/* buttons and taskname container */}
				<View className='m-auto gap-1'>
					<Text className="text-center">do my homework</Text>
					<View className="flex-row gap-3">
						<Pressable className='border self-start py-2 px-4 rounded-xl'>
							<Text>EDIT</Text>
						</Pressable>
						<Pressable className='border self-start py-2 px-4 rounded-xl'>
							<Text>RESET</Text>
						</Pressable>
						<Pressable className='bg-red-400 self-start py-2 px-4 rounded-xl'>
							<Text className="color-white">DELETE</Text>
						</Pressable>
					</View>
				</View>
				{/* menu button */}
				<ChevronDown size={23} color={"black"} strokeWidth={3} />
			</View>
			{/* add task button */}
			<View className='bg-black rounded-xl py-1'>
				<Text className='text-4xl color-white font-bold text-center'>+</Text>
			</View>
		</View>
	)
}

export default Tasks

const styles = StyleSheet.create({})
