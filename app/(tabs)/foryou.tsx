import { SplitView } from "@/components/SplitView";
import { ThemedView } from "@/components/ThemedView";
import { ThemeSafeAreaView } from "@/components/ThemeSafeAreaView";
import { Colors } from "@/constants/Colors";
import { useLibraryWallpapers, useLikedWallpapers, useSuggestedWallpapers, useWallpaper } from "@/hooks/useWallpaper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function Foryou() {
  const theme = useColorScheme() ?? 'light';
  return (
<ThemeSafeAreaView style={styles.container}>


    <Tab.Navigator style={{
      flex: 1,
  }} screenOptions={{
      tabBarActiveTintColor: Colors[theme].tint,
      tabBarStyle: {
          backgroundColor: Colors[theme].background,
      }, 
      tabBarIndicatorStyle: {
          backgroundColor: Colors[theme].indicator,
          height: 5
      }
  }}>
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Suggested" component={SuggestedScreen} />
    </Tab.Navigator>
    </ThemeSafeAreaView>
  );
}

function LibraryScreen() {
  const wallpapers = useLibraryWallpapers();
  return (
    <ThemedView style={styles.container}>
      <SplitView wallpapers={wallpapers} />
    </ThemedView>
  );
}
function LikedScreen() {
  const wallpapers = useLikedWallpapers();
  return (
    <ThemedView style={styles.container}>
      <SplitView wallpapers={wallpapers} />
    </ThemedView>
  );
}
function SuggestedScreen() {
  const wallpapers = useSuggestedWallpapers();
  return (
    <ThemedView style={styles.container}>
      <SplitView wallpapers={wallpapers} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
