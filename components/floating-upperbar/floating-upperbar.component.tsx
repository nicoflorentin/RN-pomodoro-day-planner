import { View, Text } from "react-native"
import { AlignJustify } from "~/lib/icons/AlignJustify"
import { Settings as SettingsIcon } from "~/lib/icons/Settings"

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

const FloatingUpperBar = () => {
	return (
		<View className='flex-row items-center gap-5 self-stretch'>
			<View className='flex-row m-auto justify-center bg-black py-3 px-8 items-center rounded-full gap-7'>
				<Text className='text-white font-bold'>do the homework</Text>
				<AlignJustify color={"white"} />
			</View>
			{/* settings button */}
			{/* <Settings className='absolute right-5' size={30} color={"black"} /> */}

			{/* open dialog (its a config icon) */}
			<Dialog>
				<DialogTrigger className='border right-5' asChild>
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

export { FloatingUpperBar }
