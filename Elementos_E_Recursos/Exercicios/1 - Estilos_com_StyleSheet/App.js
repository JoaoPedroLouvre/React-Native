import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Item(props){
  return(
    <View style={{
      backgroundColor: props.bgColor,
      borderRadius: 16,
      marginTop: 16,
      marginRight: 16,
      padding: 16,
      width: '100%'
    }}>

    <Text style={{ fontWeight: '700' }}> {props.text}</Text>
    </View>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha jornada no React Native</Text>
      <View style={styles.itemGrid}></View>
        <Item text='Fundamentos do React Native' bgColor='#00ff9f'/>
        <Item text='Expo e Expo CLI' bgColor='#00ff9f'/>
        <Item text='Estilização com StyleSheet' bgColor='#00ff9f'/>
        <Item text='Navegação' bgColor='#f64348'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingHorizontal: '16',
    paddingTop: 80,
  },

  title: {
    borderBottomColor: "#121212",
    borderBottomWidth: 1,
    color: "#121212",
    fontSize: 24,
    paddingBottom: 8,
  },

  itemGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
});
