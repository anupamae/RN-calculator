import { SafeAreaView } from 'react-native';
import KeyBoard from './src/components/KeyBoard';
import Styles from './src/styles/globalStyles';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <KeyBoard />
    </SafeAreaView>
  );
}
