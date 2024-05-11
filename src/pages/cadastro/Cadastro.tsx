import {View, Text, StyleSheet} from "react-native";

export default function Cadastro(){
    return(
        <View style={styles.Tela}>
            <Text style={styles.Text}>Tela de cadastro</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    Text:{
        marginLeft:10,
        fontSize: 20,
    },
    Tela:{
        marginTop:30
    }
})