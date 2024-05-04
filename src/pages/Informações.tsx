import { View,Text,StyleSheet } from "react-native";
export default function Info(){
    return(
        <View><Text style={styles.Tela}>informações</Text></View>
    )
}
const styles = StyleSheet.create({
    Tela:{
        marginLeft:10,
        fontSize: 20,
    }
})