import { View,Text,TouchableOpacity,StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Cateira(){
    const navigation = useNavigation();

    function Criar() {navigation.navigate("Home");
}

    return(<View style={styles.Tela}> 
        <TouchableOpacity onPress={() => Criar()} style={styles.botao}>
        <Text>Voltar</Text>
    </TouchableOpacity>
    </View>
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
    }
});