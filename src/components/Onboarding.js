import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import slides from "../common/slide";

import OnboardingItem from "../constants/OnboardingItem";

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Onboarding;
