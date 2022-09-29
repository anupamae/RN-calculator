import { StyleSheet, Text, SafeAreaView, Switch} from 'react-native';
import { ThemeContext } from './src/Context/ThemeContext';
import { useState } from 'react';
import KeyBoard from './src/components/KeyBoard';
import { colors } from './src/styles/Colors';

export default function App() {

  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={theme === 'light'? styles.container :  [styles.container, {backgroundColor: 'black'}]}>
      <Switch value={theme === 'light'} 
        onValueChange ={() => setTheme(theme === 'light'? 'dark' : 'light')} />
        <KeyBoard />
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
