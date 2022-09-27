import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch} from 'react-native';
import { ThemeContext } from './src/components/context/ThemeContext';
import { useState } from 'react';

export default function App() {

  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
    <View style={theme === 'light'? styles.container :  styles.dark_theme}>
      <Switch value={theme === 'light'} 
        onValueChange ={() => setTheme(theme === 'light'? 'dark' : 'light')} />
    </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    minheight: '100vh'
  },
  dark_theme: {
    backgroundColor: '#000',
    alignItems: 'center',
    minHeight: '100vh'
  }
});
