import React from "react";
import { View } from "react-native";
import Onboarding from "./src/components/Onboarding";
import HomePage from "./src/screens/HomePage";

/* @@@@@@
// TODO: highlight comment
// FIXME: suggest to fix code
 @@@@@@ */

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            {/* <Onboarding /> */}
            <HomePage />
        </View>
    );
}
