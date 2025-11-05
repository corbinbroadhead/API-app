import { Pressable, Text } from "react-native";

type Props = {
  text: string;
  onClick: () => void;
};

export default function BasicButton({ text, onClick }: Props) {
  const colors = {"accent": "#d0d0d0", "text": "black", "background": "white"}

  return (
    <Pressable
      onPress={onClick}
      style={{
        backgroundColor: colors.accent,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginVertical: 6,
        alignItems: "center",
        shadowOpacity: 0.6,
        shadowRadius: 4,
        shadowOffset: { width: 2, height: 4 },
      }}
    >
      <Text style={{ color: colors.text, fontWeight: "bold", fontSize: 16 }}>{text}</Text>
    </Pressable>
  );
}