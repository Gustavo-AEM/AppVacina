import { View,Text,TouchableOpacity,StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Carteira(){
    const navigation = useNavigation();
    
    function Criar() {navigation.navigate("Carteira");
    }
    function Voltar() {navigation.navigate("Informações");
  }
    return(
    <View>
      <View style={styles.Tela}> 
        <TouchableOpacity onPress={() => Voltar()} style={styles.botao}>
        <Text>Voltar</Text>
    </TouchableOpacity>
    <View style={styles.Tela}><Text style={styles.Text}>Tela Inicial</Text></View>
    </View>
      <View style={styles.Tela2}>
    <TouchableOpacity onPress={() => Criar()} style={styles.botao2}>
        <Text>mais</Text>
    </TouchableOpacity></View>
    
    </View>

    )
}
const styles = StyleSheet.create({
  Text:{marginTop:30,
    marginLeft:20,
    fontSize: 20,
},
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
    botao2:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        padding:40,
        marginTop:480,
        backgroundColor:'#392DE9'
    },
    Tela2:{
        alignItems:'center'
    }
});