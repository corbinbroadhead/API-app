import IconButton from "@/components/iconButton";
import Octicons from '@expo/vector-icons/Octicons';
import { router } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <IconButton text="View Characters" onClick={()=> router.push("/characters/allCharacters")} icon={<Octicons name="person" size={24} color="black" />}></IconButton>
      <IconButton text="View Starships" onClick={()=> router.push("/ships/allShips")} icon={<Octicons name="rocket" size={24} color="black" />}></IconButton>
    </View>
  );
}
