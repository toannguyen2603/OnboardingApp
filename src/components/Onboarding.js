import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, FlatList, Animated } from "react-native";
import slides from "../common/slide";

import OnboardingItem from "../constants/OnboardingItem";
import Paginator from "../constants/Paginator";
import NextButton from "./NextButton";

const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // TODO: Get position of list
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({
        viewAreaCoveragePercentThreshold: 50,
    }).current;

    const scrollTo = () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({
                index: currentIndex + 1,
            });
        } else {
            console.log("Last item");
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={slides}
                    renderItem={({ item }) => <OnboardingItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: scrollX,
                                    },
                                },
                            },
                        ],
                        { useNativeDriver: false },
                    )}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>

            {/* TODO: Paginator */}
            <Paginator data={slides} scrollX={scrollX} />

            {/* TODO: button next onboard */}
            <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)} />
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
