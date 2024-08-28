/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/stats` | `/(tabs)/tasks` | `/_sitemap` | `/deletedIndex` | `/features/timer/clock` | `/features/timer/clock/timer.component` | `/features/timer/play-pause/play-button.component` | `/helpers/formatSeconds` | `/stats` | `/tasks`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
