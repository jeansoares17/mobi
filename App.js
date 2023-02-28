import React from 'react';

import {Alert, Button, StatusBar, StyleSheet, TextInput, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtPeso: "",
      txtAltura: "",
    }
}

botaocalcular = () => {
  const {txtPeso, txtAltura} = this.state;
  const peso = parseFloat(txtpeso);
  const altura = parseFloat(txtAltura);

  if (Number.isNaN(peso) || Number.isNaN(altura)){
    Alert.alert("Erro", "Preencha os campos corretamente.")
    return;
  }

  const imc = peso  / (altura * altura)
  let categoria = "";
  if (imc < 18.5) {
    categoria = "Abaixo do peso.";
  }

  else if (imc <25){
    categoria = "Peso Normal";
  }

  else if(imc<30){
    categoria ="Acima do peso.";
  }

  else {
     categoria = "Obesidade";
  }

const mensagem = `IMC = ${imc.toFixed(1)}\n$ {categoria}`;
 Alert.alert("Indice de Massa Corporal", mensagem);

}
render() {
  return (
    <View style={styles.container}>

      <TextInput style={styles.inputStyle}
        placeholder="Peso"
        keyboardType="numeric"
        onChangeText={peso => this.setState({ txtPeso: peso })} />

    <View style={styles.separator} />

    <TextInput style={styles.inputStyle}
      placeholder="Altura"
      keyboardType="numeric"
      onChangeText={altura => this.setState({ txtAltura: altura })} />
    <View style={styles.separator} />
    <Button title="Calcular"
      onPress={this.botaoCalcular} />
    <StatusBar style="auto"/>
</View>
    );
  }
}

const styles =StyleSheet.create({
  container: {
    padding: 16,
},

inputStyle: {
  borderColor:'gray',
  borderWidth: 1,
  height: 40,
  paddingHorizontal: 5,
},
separator: {
marginBottom: 20,
}
});