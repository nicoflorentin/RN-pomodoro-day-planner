import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

// This line was added to fix the bug that caused the web app to not refresh
import "@expo/metro-runtime";

// https://docs.expo.dev/router/reference/troubleshooting/#expo_router_app_root-not-defined

// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context('./app');
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
