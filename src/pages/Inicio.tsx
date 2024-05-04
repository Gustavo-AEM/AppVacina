import { View,Text,TouchableOpacity,StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Inicio(){
    const navigation = useNavigation();
    
    function Criar() {navigation.navigate("Carteira");
    }

    return(
    
    <View style={styles.Tela}>
    <TouchableOpacity onPress={() => Criar()} style={styles.botao}>
        <Text>mais</Text>
    </TouchableOpacity></View>
    )
}
const styles = StyleSheet.create({
    botao:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        padding:40,
        marginTop:510,
        backgroundColor:'#392DE9'
    },
    Tela:{
        alignItems:'center'
    }
});
