import { useState } from "react"
import { View } from "react-native"

const Circles = () => {


	return (
		<View className='flex-row gap-2'>
			<View className='bg-black rounded-full border border-black w-5 h-5'></View>
			<View className='bg-black rounded-full border border-black w-5 h-5'></View>
			<View className='rounded-full border border-black w-5 h-5'></View>
			<View className='rounded-full border border-black w-5 h-5'></View>
		</View>
	)
}

export { Circles }