import { Colors } from "@/constants/Colors";
import { SafeAreaView, useColorScheme } from "react-native";


export function ThemeSafeAreaView({children , style={}} : {
    children: React.ReactNode,
    style:any;
}){
    const theme = useColorScheme() ?? "light"
    return <SafeAreaView style={{backgroundColor:Colors[theme].background, ...style}}>
   {children}
    </SafeAreaView>
}