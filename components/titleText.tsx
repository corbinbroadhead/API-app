import { Text } from "react-native";

type Props = {
  text: string;
  size?: number;
  marginTop?: number;
  marginBottom?: number;
  textAlign?: string;
};

export default function TitleText({ text, size = 20, marginTop = 0, marginBottom = 0, textAlign = "left" }: Props) {
  const colors = {"accent": "#d0d0d0", "text": "black", "background": "white"}

  return (
    <Text
      style={{
        fontSize: size,
        color: colors.text,
        fontWeight: "bold",
        textAlign: textAlign,
        width: "100%",
        marginTop: marginTop,
        marginBottom: marginBottom,
        flexWrap: "wrap"
      }}
    >
      {text}
    </Text>
  );
}