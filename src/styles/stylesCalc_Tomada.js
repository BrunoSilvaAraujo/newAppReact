import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#38c172',
  },
  botao: {
    marginTop: 30,
    borderLeftWidth: 5,
    borderBottomWidth: 3.5,
    borderTopWidth: 1,
    borderRadius: 600,
    padding: 6,
    borderColor: '#333',
    height: 40,
    backgroundColor: '#FA5858',
    alignItems: 'center',
  },
  inputs: {
    paddingLeft: 20,
    borderBottomWidth: 2,
    borderRadius: 0,
    borderColor: '#FA5858',
    width: 330,
    fontSize: 18,
    fontStyle: 'italic',
    marginTop: 20,
  },
  textoObs: {
    color: 'red',
    fontStyle: 'italic',
  },
});

export default styles;
