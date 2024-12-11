import { DownloadPicture } from "@/components/BottomSheet";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemeSafeAreaView } from "@/components/ThemeSafeAreaView";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Appearance
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
export default function Account() {
  const theme = useColorScheme() ?? "light";
  return (
<ThemeSafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
            <Header />
            <ThemedView style={{ flex: 1 }}>
                <LoginButtons />
                <ThemeSelector />
                <About />
            </ThemedView>
        </ScrollView>
    </ThemeSafeAreaView>
  );
}

function About() {
  return <ThemedView style={styles.margin}>
      <ThemedText style={styles.textBig}>About</ThemedText>
      <ThemedView style={{ marginTop: 10 }}>
          <Pressable>
              <ThemedText style={{margin: 10, fontSize: 18}}>Accont</ThemedText>
          </Pressable>
          <Pressable>
              <ThemedText style={{margin: 10, fontSize: 18}}>Privacy Policy</ThemedText>
          </Pressable>
          <Pressable>
              <ThemedText style={{margin: 10, fontSize: 18}}>Terms of Service</ThemedText>
          </Pressable>
          <Pressable>
              <ThemedText style={{margin: 10, fontSize: 18}}>Licenses</ThemedText>
          </Pressable>
      </ThemedView>
  </ThemedView>
}

function Header() {
  return (
    <ThemedView>
      <ThemedText style={styles.textBig}>Panels</ThemedText>
      <ThemedText>Sign in to save your data</ThemedText>
    </ThemedView>
  );
}

function LoginButtons() {
  const theme = useColorScheme() ?? "light";
  return (
    <>
      <AuthButton
        label={"Sign in with Google"}
        icon={
          <Ionicons
            name={"logo-google"}
            size={24}
            color={theme === "light" ? Colors?.light.icon : Colors.dark.icon}
            style={{ paddingLeft: 4 }}
          />
        }
      />
      <AuthButton
        label={"Sign in with Apple"}
        icon={
          <Ionicons
            name={"logo-apple"}
            size={24}
            color={theme === "light" ? Colors?.light.icon : Colors.dark.icon}
            style={{ paddingLeft: 4 }}
          />
        }
      />
    </>
  );
}

function ThemeSelector() {
  return (
    <ThemedView style={{ marginTop: 20 }}>
      <ThemedText style={styles.textBig}>Settings</ThemedText>
      <ThemedText>Theme</ThemedText>
      <View style={styles.themeButtonContainer}>
        <ThemeButton title={"Dark"} selected={false} colorScheme="dark" />
        <ThemeButton title={"Light"} selected={false} colorScheme="light" />
        <ThemeButton title={"System"} selected={false} colorScheme={null} />
      </View>
    </ThemedView>
  );
}

function ThemeButton({ title, selected, colorScheme }: { selected: boolean; title: string; colorScheme: "dark" | "light" | null }) {
  const theme = useColorScheme();
  return (
    <Pressable
      style={[
        styles.themeButton,
        selected && styles.selectedThemeButton, // Apply special styles if selected
        { borderColor: theme === "light" ? Colors.light.text : Colors.dark.icon },
      ]}
      onPress={() => {
        Appearance.setColorScheme(colorScheme);
      }}
    >
      <ThemedText style={{ textAlign: "center" }}>{title}</ThemedText>
    </Pressable>
  );
}

function AuthButton({ label, icon }: { label: string; icon: any }) {
  const theme = useColorScheme() ?? 'light';
  return (
    <Pressable style={{
      backgroundColor: theme,
      padding: 10,
      marginHorizontal: 40,
      marginVertical: 5,
      justifyContent: "center",
      flexDirection: "row",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme === 'light' ? Colors.light.text : Colors.dark.icon
    }}>
      {icon}
      <ThemedText style={styles.authButtonText}>{label}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  lightBackground: {
    backgroundColor: Colors.light.background,
  },
  darkBackground: {
    backgroundColor: Colors.dark.background,
  },
  textBig: {
    fontSize: 25,
    fontWeight: "600",
  },

  authButtonText: {
    fontSize: 20,
    fontWeight: "600",
  },
  themeButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  themeButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: "center",
  },
  selectedThemeButton: {
    backgroundColor: "black",
  },
  margin: {
    padding: 20
}
});