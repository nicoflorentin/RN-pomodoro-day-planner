import { View, Text, Pressable } from "react-native"
import React, { useState } from "react"
import { AlignJustify } from "lucide-react-native"
import { Dropdown } from "react-native-element-dropdown"
import { Settings as SettingsIcon } from "~/lib/icons/Settings"
import useTaskStore from "~/features/store/tasks.state"

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "~/components/ui/dialog"
import { Button } from "../ui/button"

interface TaskElement {
	label: string
	value: string
}

const CustomBlackDropdown = ({ data }: { data: TaskElement[] }) => {
	const [selectedTaskName, setSelectedTaskName] = useState("Select a task")
	const { removeTask } = useTaskStore((state) => state)

	const renderItem = (item: TaskElement) => {
		return (
			<View className='flex-row justify-between p-3 rounded-full'>
				<Text>{item.label}</Text>
				<Pressable onPress={() => removeTask(item.value)}>
					<Text>X</Text>
				</Pressable>
			</View>
		)
	}

	return (
		<View className='flex-row justify-center items-center gap-5 self-stretch'>
			<View>
				<Dropdown
					data={data}
					placeholder={"Select a task"}
					placeholderStyle={{ color: "white", fontWeight: "bold" }}
					labelField={"label"}
					valueField={"value"}
					value={selectedTaskName}
					onChange={(item) => setSelectedTaskName(item.label)}
					style={{
						width: 250,
						backgroundColor: "black",
						paddingVertical: 15,
						paddingHorizontal: 35,
						borderRadius: 50,
					}}
					renderRightIcon={() => <AlignJustify color={"white"} />}
					renderItem={renderItem}
				/>
			</View>
			<Dialog>
				<DialogTrigger className='border' asChild>
					<Button variant='ghost'>
						<SettingsIcon className='absolute' size={30} color={"black"} />
					</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px] border-8 border-black'>
					<DialogHeader>
						<DialogTitle>Tutorial</DialogTitle>
						<DialogDescription>
							<Text className='text-center font-bold text-md'>Haz lo que debes hacer, hazlo ya.</Text>
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
