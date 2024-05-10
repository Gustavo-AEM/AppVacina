import { View,Text,TouchableOpacity,StyleSheet} from "react-native";

export default function Inicio(){

    return(
    
    <View style={styles.Tela}></View>
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
