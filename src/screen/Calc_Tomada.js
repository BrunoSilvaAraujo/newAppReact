import React from 'react';
import {
  StatusBar,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import styles from '../styles/stylesCalc_Tomada';
import LinearGradient from 'react-native-linear-gradient';

export default function Tomada({navigation}) {
  return (
    <LinearGradient
      colors={['#CEF6CE', '#9FF781', '#82FA58', '#40FF00']}
      style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#333" />
      <View>
        <View style={{marginTop: 70}}>
          <TextInput
            autoCompleteType="off"
            placeholderTextColor="gray"
            style={styles.inputs}
            placeholder="Medida do Ambiente em (M²)"
            onSubmitEditing={Keyboard.dismiss}
          />
          <TextInput
            autoCompleteType="off"
            placeholderTextColor="gray"
            style={styles.inputs}
            placeholder="Pôtencia da tomada em Watts"
          />
        </View>
        <Text style={styles.textoObs}>
          * Se o campo "Pôtencia em Watts" não for preenchido,{'\n'} o cálculo
          será feito com um valor padrão.
        </Text>
        <TouchableOpacity
          style={styles.botao}
          activeOpacity="0.9"
          onPress={() => navigation.navigate('Home')}>
          <Text style={{fontSize: 20}}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
