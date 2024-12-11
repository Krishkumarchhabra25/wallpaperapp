
import { SplitView } from "@/components/SplitView";
import { useCarousel } from "@/hooks/useCarousel";

import { useWallpaper, Wallpaper } from "@/hooks/useWallpaper";

import { useState } from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";

import Carousel from "react-native-reanimated-carousel";

import { LinearGradient } from 'expo-linear-gradient';
import { ThemeSafeAreaView } from "@/components/ThemeSafeAreaView";
import { transform } from "@babel/core";
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
const TOPBAR_HEIGHT = 250;

export default function explore() {
    const wallpapers = useWallpaper();
    const width = Dimensions.get('window').width;
    const [yOffset, setScrollY] = useState(0);
    const carouselItems = useCarousel();

    const headerAnimatedStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            scale: interpolate(yOffset, [-TOPBAR_HEIGHT, 0, TOPBAR_HEIGHT], [1.5, 1, 1]),
          },
        ],
      };
    });

    const textAnimatedStyle = useAnimatedStyle(() => {
      return {
        opacity: interpolate(yOffset, [-TOPBAR_HEIGHT, TOPBAR_HEIGHT / 2, TOPBAR_HEIGHT], [1, 1, 0]),
      };
    });

    return <ThemeSafeAreaView style={{flex: 1}}>
      <Animated.View style={[{height: Math.max(0, TOPBAR_HEIGHT - yOffset)}, headerAnimatedStyle]}>
        <Carousel
          width={width}
          data={carouselItems}
          onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={({ index }) => (
            <>
              <View
                style={{
                    flex: 1,
                    borderWidth: 1,
                    justifyContent: 'center',
                }}
              >
                <Image source={{uri: carouselItems[index].image}} style={{height: TOPBAR_HEIGHT}} />
              </View>

              <LinearGradient colors={['transparent', 'black']} style={{flex: 1, position: "absolute", zIndex: 10, height: TOPBAR_HEIGHT / 2, width: "100%", bottom: 0}}>
                <Animated.View style={textAnimatedStyle}>
                  <Text style={[{color: "white", paddingTop: TOPBAR_HEIGHT / 3, textAlign: "center", fontSize: 30, fontWeight: "600"}]}>{carouselItems[index].title}</Text>
                </Animated.View>
              </LinearGradient>
            </>
          )}
        />
      </Animated.View>
      <View style={{borderRadius: 20}}>
        <SplitView onScroll={(yOffset) => {
          setScrollY(yOffset)
        }} wallpapers={wallpapers} />
      </View>
    </ThemeSafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 10
    },
    imageContainer: {
        paddingVertical: 10
    }
})