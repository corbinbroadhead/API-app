import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "white",
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="index" options={{ title: "Home"}} />
      <Stack.Screen name="ships/allShips" options={{ title: "All Starships"}} />
      <Stack.Screen name="ships/ship" options={{ title: "Starship Specs"}} />
      <Stack.Screen name="characters/allCharacters" options={{ title: "All Characters"}} />
      <Stack.Screen name="characters/character" options={{ title: "Character Specs"}} />
    </Stack>;
}
