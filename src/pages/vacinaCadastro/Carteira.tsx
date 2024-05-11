import { View,Text,TouchableOpacity,StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Carteira(){
    const navigation = useNavigation();

    function Criar() {navigation.navigate("Home");
}

    return(<View style={styles.Tela}> 
        <TouchableOpacity onPress={() => Criar()} style={styles.botao}>
        <Text>Voltar</Text>
    </TouchableOpacity>
    <View style={styles.Tela}><Text style={styles.Text}>Tela de Cadastrar carteira</Text></View>
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
    }
});