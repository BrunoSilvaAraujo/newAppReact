import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import styles from '../styles/stylesHome';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen({navigation}) {
  return (
    <LinearGradient
      colors={['#CEF6CE', '#9FF781', '#82FA58', '#40FF00']}
      style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#333" />
      <View style={styles.container}>
        <View>
          <Text style={styles.titulo}>Cálculos de Elétrica</Text>
          <View>
            <LinearGradient
              colors={['#333', '#424242', '#585858']}
              style={styles.botao}>
              <TouchableOpacity
                activeOpacity="0.9"
                onPress={() => navigation.navigate('Cálculo de Tomada')}>
                <Text style={styles.texto}>Dimencionamento de tomadas</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View>
            <LinearGradient
              colors={['#333', '#424242', '#585858']}
              style={styles.botao}>
              <TouchableOpacity
                activeOpacity="0.9"
                onPress={() => navigation.navigate('Cálculo de Iluminação')}>
                <Text style={styles.texto}>Dimencionamento de lâmpadas</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View>
            <LinearGradient
              colors={['#333', '#424242', '#585858']}
              style={styles.botao}>
              <TouchableOpacity activeOpacity="0.9">
                <Text style={styles.texto}>Dimencionamento de Cabos</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View>
            <LinearGradient
              colors={['#333', '#424242', '#585858']}
              style={styles.botao}>
              <TouchableOpacity activeOpacity="0.9">
                <Text style={styles.texto}>Dimencionamento de dijuntores</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
