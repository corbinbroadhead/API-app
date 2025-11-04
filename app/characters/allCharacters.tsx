import CustomListItem from "@/components/customListItem";
import useStarWarsCharacterData from "@/hooks/useStarWarsCharacterData";
import { router } from "expo-router";
import { ActivityIndicator, ScrollView, View } from "react-native";

export default function allCharacters() {
    const id = null;
    const { data } = useStarWarsCharacterData(id);

  return (
    <ScrollView       
      contentContainerStyle={{
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
      paddingHorizontal: 8,
      paddingVertical: 8,
    }}
    >
      {!data && <ActivityIndicator size={40} color="gray"></ActivityIndicator>}
      {data && (<View style={{ width: "100%" }}>
        {data.results.map((character, index) => (
                    <CustomListItem
                      key={index}
                      text={character.name}
                      onClick={() =>
                        router.push({
                          pathname: "/characters/character",
                          params: { url: character.url },
                        })
                      }
                    />
                  ))}
        </View>)}
    </ScrollView>
  );
}