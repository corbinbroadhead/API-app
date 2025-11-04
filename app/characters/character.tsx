import CustomDataField from "@/components/customDataField";
import useStarWarsCharacterData from "@/hooks/useStarWarsCharacterData";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, View } from "react-native";

export default function Ship() {
    const { url } = useLocalSearchParams();
    const { data } = useStarWarsCharacterData(url);

  return (
    <ScrollView contentContainerStyle={{
      flexGrow: 1, alignItems: "center", justifyContent: "flex-start", width: "100%", paddingHorizontal: 0, paddingVertical: 8,
    }}>
      {!data && <ActivityIndicator size={40} color="gray"></ActivityIndicator>}
      {data && (<View style={{width: "100%", paddingHorizontal: 8}}>
        <CustomDataField title="Name" body={data.name}></CustomDataField>
        <CustomDataField title="Height" body={data.height} units="cm"></CustomDataField>
        <CustomDataField title="Birth Year" body={data.birth_year}></CustomDataField>
      </View>)}
    </ScrollView>
  );
}