import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Info(){
    const navigation = useNavigation();

    function Criar() {navigation.navigate("Home");
}
    return(
    <View>
        <View style={styles.Tela}> 
        <TouchableOpacity onPress={() => Criar()} style={styles.botao}>
        <Text>Voltar</Text>
    </TouchableOpacity>
    </View>
        <View style={styles.Tela}><Text style={styles.Text}>informações do cadastro</Text></View></View>
    )
}
const styles = StyleSheet.create({
    botao:{
        marginLeft:20,
        marginTop:40,
        padding:10,
        backgroundColor:'#392DE9',
        borderRadius:8,
    },
    Tela:{
        alignItems:'flex-start',
    },
    Text:{marginTop:30,
        marginLeft:20,
        fontSize: 20,
    },
    Tela2:{
        marginTop:30
    }
})