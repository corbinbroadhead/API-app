import Entypo from '@expo/vector-icons/Entypo';
import { Pressable, Text } from "react-native";

type Props = {
  text: string;
  onClick?: () => void;
  clickable?: boolean;
};

export default function CustomListItem({ text, onClick, clickable = true }: Props) {
  const colors = { accent: "#d0d0d0", text: "black", background: "white" };

  return (
    <Pressable
      disabled={!clickable}
      onPress={clickable ? onClick : undefined}
      style={{
        backgroundColor: colors.background,
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: { width: 2, height: 0 },
      }}
    >
      <Text style={{ color: colors.text, fontWeight: "bold", fontSize: 16 }}>
        {text}
      </Text>
      {clickable && <Entypo name="chevron-right" size={24} color={colors.text} />}
    </Pressable>
  );
}
