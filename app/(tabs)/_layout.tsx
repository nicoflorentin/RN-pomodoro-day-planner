import { Tabs } from "expo-router"
import React from "react"
import { Timer } from "~/lib/icons/Timer"
import { ListChecks } from "~/lib/icons/ListChecks"
import { FontAwesome6 } from "~/lib/icons/ChartColumnIncreasing"

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					title: "timer",
					tabBarIcon: ({ color }) => <Timer size={28} color={color} />,

				}}
			/>
			<Tabs.Screen
				name='tasks'
				options={{
					title: "tasks",
					tabBarIcon: ({ color }) => <ListChecks size={28} color={color} />,
				}}
			/>
			<Tabs.Screen
				name='stats'
				options={{
					title: "stats",
					tabBarIcon: ({ color }) => <FontAwesome6 name="chart-simple" size={28} color={color} />,
				}}
			/>
		</Tabs>
	)
}
