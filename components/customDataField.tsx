import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TitleText from "./titleText";

interface CustomDataFieldProps {
  title: string;
  body: string;
  units?: string;
}

export default function CustomDataField({ title, body, units }: CustomDataFieldProps) {
    const colors = {"accent": "#d0d0d0", "text": "black", "background": "white"}
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <TitleText text={title} />
      <View style={styles.bodyRow}>
        <Text style={styles.body}>
          {body}
          {units && <Text style={styles.units}> {units}</Text>}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: "100%",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { width: 2, height: 0 },
  },
  bodyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  body: {
    fontSize: 18,
    color: "#171717",
  },
  units: {
    fontSize: 15,
    color: "#414141",
    marginLeft: 6,
  },
});
