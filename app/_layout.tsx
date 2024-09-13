import "~/global.css"

import AsyncStorage from "@react-native-async-storage/async-storage"
import { Theme, ThemeProvider } from "@react-navigation/native"
import { SplashScreen, Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import * as React from "react"
import { Platform, Text, View } from "react-native"
import { NAV_THEME } from "~/lib/constants"
import { useColorScheme } from "~/lib/useColorScheme"
import { PortalHost } from "@rn-primitives/portal"
import Constants from "expo-constants"

const LIGHT_THEME: Theme = {
	dark: false,
	colors: NAV_THEME.light,
}
const DARK_THEME: Theme = {
	dark: true,
	colors: NAV_THEME.dark,
}

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router"

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme()
	const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false)

	React.useEffect(() => {
		;(async () => {
			const theme = await AsyncStorage.getItem("theme")
			if (Platform.OS === "web") {
				// Adds the background color to the html element to prevent white background on overscroll.
				document.documentElement.classList.add("bg-background")
			}
			if (!theme) {
				AsyncStorage.setItem("theme", colorScheme)
				setIsColorSchemeLoaded(true)
				return
			}
			const colorTheme = theme === "dark" ? "dark" : "light"
			if (colorTheme !== colorScheme) {
				setColorScheme(colorTheme)

				setIsColorSchemeLoaded(true)
				return
			}
			setIsColorSchemeLoaded(true)
		})().finally(() => {
			SplashScreen.hideAsync()
		})
	}, [])

	if (!isColorSchemeLoaded) {
		return null
	}

	const paddingTop: any = Constants.statusBarHeight

	return (
		<ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
			<StatusBar style={isDarkColorScheme ? "light" : "dark"} />
			<View className={`h-[${paddingTop}]`}>
				<Text></Text>
			</View>
			<Stack>
				{/* <Stack.Screen
					name='index'
					options={{
						title: "Starter Base",
						headerRight: () => <ThemeToggle />,
						}}
				/> */}
				<Stack.Screen
					name='(tabs)'
					options={{
						headerShown: false,
						// headerRight: () => <ThemeToggle></ThemeToggle>,
					}}
				/>
			</Stack>
			<PortalHost />
		</ThemeProvider>
	)
}
