import { View, Text } from "react-native"
import React from "react"
import { AlignJustify } from "lucide-react-native"
import { Dropdown } from "react-native-element-dropdown"

const CustomBlackDropdown = ({ data }: any) => {
	return (
		<View>
			<Dropdown
				data={data}
				placeholder={"Select a task"}
				placeholderStyle={{ color: "white", fontWeight: "bold" }}
				labelField={'label' as any}
				valueField={'value' as any}
				onChange={(value: string) => console.log(value)}
				style={{
					width: 250,
					backgroundColor: "black",
					paddingVertical: 15,
					paddingHorizontal: 35,
					borderRadius: 50,
				}}
				renderRightIcon={() => <AlignJustify color={"white"} />}
			/>
		</View>
	)
}

export { CustomBlackDropdown }
