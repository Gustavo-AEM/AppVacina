import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Form() {
    const navigation = useNavigation();

    const [matricula, setMatricula] = useState(null)
    const [senha, setSenha] = useState(null)
    const [textButton] = useState("Entrar")

    const createAlert = () => Alert.alert(
        "Oops!",
        "Verifique se o campo matrícula e senha estão preenchidos."
    );

    function limpaCampos() {
        if (matricula == null) {
            createAlert();
        }else{ if (senha == null){
          createAlert();
      }else{
        navigation.navigate("Home");
    }
        }
    }

    return (
            <View style={styles.form}>
              <View><Text style={styles.Login}>Login</Text></View>
              <Text style={styles.title}>Digite seu CPF</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setMatricula}
                    value={matricula}
                    placeholder="CPF"
                    keyboardType="numeric"
                />
                <Text style={styles.title}>Digite sua Senha</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setSenha}
                    value={senha}
                    placeholder="Senha"
                />

                <View style={styles.botaoArea}>
                <TouchableOpacity style={styles.botao}>
                        <Text style={styles.botaoS}>Cadastrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.botao,styles.botaoSalvar]}
                    onPress={() => limpaCampos()}
                >
                    <Text style={styles.textButtonClean}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}
const styles = StyleSheet.create({
    title:{
      fontSize:17
    },
    Login: {
      marginTop:-90,
      fontSize:30
    },
  form:{
      marginTop:270,
      padding:10,
  },
  input:{
      borderRadius:10,
      backgroundColor:"#DCDCDC",
      height:60,
      margin:12,
      paddingLeft:10,
  },
  textButtonClean:{
      fontSize:22,
      color:"#FFFFFF"
  },
  botao:{
    flex:1,
    alignItems:'center',
    marginTop:14,
    padding:8,
},
botaoS:{
  color:"#FFF",
  fontWeight:'bold'
},
botaoSalvar:{
  backgroundColor:"#392DE9",
  borderRadius:8,
},
botaoArea:{
  flexDirection:"row",
  width:'90%',
  marginTop:130,
  alignItems:'center',
  justifyContent:"space-between"
},
});
