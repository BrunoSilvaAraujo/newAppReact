import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
    color: '#333',
    alignSelf: 'center',
    marginTop: 70,
    marginBottom: 20,
    borderBottomWidth: 1.5,
    borderLeftWidth: 3,
    borderRadius: 800,
    padding: 10,
    borderColor: 'darkred',
    fontWeight: 'bold',
  },
  botao: {
    padding: 3,
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 20,
    marginTop: 10,
    width: 370,
  },
  texto: {
    color: 'white',
    fontSize: 16,
    padding: 20,
    fontWeight: 'bold',
  },
});

export default styles;
