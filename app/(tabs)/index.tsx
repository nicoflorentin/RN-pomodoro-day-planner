import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { ThemeToggle } from "~/components/ThemeToggle"
import { Lightbulb } from "~/lib/icons/Lightbulb"
import { Coffee } from "~/lib/icons/Coffee"
import { Armchair } from "~/lib/icons/Armchair"
import { AlignJustify } from "~/lib/icons/AlignJustify"
import { Settings } from "~/lib/icons/Settings"
import FontAwesome from "@expo/vector-icons/FontAwesome"

const Timer = () => {
	return (
		// all index container
		<View className='items-center gap-32 grow py-3'>
			{/* upper bar */}
			<View className='flex-row items-center gap-5 self-stretch'>
				<View className='flex-row m-auto bg-black py-3 px-8 justify-center items-center rounded-full gap-7'>
					<Text className='text-white font-bold'>do the homework</Text>
					<AlignJustify color={"white"} />
				</View>
				<Settings className='absolute right-5' size={30} color={"black"} />
			</View>

			{/* timer and circles */}
			<View className='items-center'>
				<Text className='text-[80px] font-bold'>25:00</Text>

				{/* circles container */}
				<View className='flex-row gap-2'>
					<View className='bg-black rounded-full border border-black w-5 h-5'></View>
					<View className='bg-black rounded-full border border-black w-5 h-5'></View>
					<View className='rounded-full border border-black w-5 h-5'></View>
					<View className='rounded-full border border-black w-5 h-5'></View>
				</View>
			</View>

			{/* play button container */}
			<View className='items-center gap-3'>
				<Text>hold to give up</Text>
				<View className='border w-20 h-20 justify-center items-center rounded-full'>
					<FontAwesome className='left-[2px]' name='play' size={30} color='black' />
				</View>
			</View>
			<View className="flex-row gap-5 border grow">
				<Text className="border p-2 grow basis-0 text-right">12345678</Text>
				<Text className="border p-2">2</Text>
				<Text className="border p-2 items-start grow basis-0">3123</Text>
			</View>

			{/* 3 icons view */}
			<View className='flex-row gap-10'>
				{/* icon */}
				<View className='items-end grow basis-0'>
					<View className='items-center'>
						<Text className='font-bold text-sm'>25 min</Text>
						<Lightbulb className='color-black' size={50} strokeWidth={1} />
						<Text className='font-bold text-sm'>focus</Text>
					</View>
				</View>
				{/* icon */}
				<View className='items-center opacity-30 '>
					<Text className="text-sm">5 min</Text>
					<Coffee className='color-black' size={50} strokeWidth={1} />
					<Text className="text-sm">break</Text>
				</View>
				{/* icon */}
				<View className='items-start opacity-30  grow basis-0'>
				<View className='items-center'>
					<Text className="text-sm">15 min</Text>
					<Armchair className='color-black' size={50} strokeWidth={1} />
					<Text className="text-sm">long break</Text>
					</View>
				</View>
			</View>

			
		</View>
	)
}

export default Timer

const styles = StyleSheet.create({})
