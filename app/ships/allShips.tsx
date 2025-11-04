import CustomListItem from "@/components/customListItem";
import useStarWarsShipData from "@/hooks/useStarWarsShipData";
import { router } from "expo-router";
import { ActivityIndicator, ScrollView, View } from "react-native";

export default function AllShips() {
  const id = null;
  const { data } = useStarWarsShipData(id);

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
      {!data && <ActivityIndicator size={40} color="gray" />}

      {data && (
        <View style={{ width: "100%" }}>
          {data.results.map((ship, index) => (
            <CustomListItem
              key={index}
              text={ship.name}
              onClick={() =>
                router.push({
                  pathname: "/ships/ship",
                  params: { url: ship.url },
                })
              }
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
}
