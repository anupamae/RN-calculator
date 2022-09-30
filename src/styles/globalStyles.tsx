import { StyleSheet } from "react-native";
import { colors } from './Colors';

export const Styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  // Operator
  operator: { 
    color: colors.operator, 
    fontSize: 50, 
    fontWeight: '500' 
  },
  // Button
  btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 15,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 15,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 15,
    backgroundColor: colors.btnGray,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  smallTextLight: {
    fontSize: 32,
    color: colors.white,
  },
  smallTextDark: {
    fontSize: 32,
    color: colors.black,
  },
  // Keyboard
  row: {
    maxWidth: '100%',
    flexDirection: "row",
  },
  viewBottom: {
    position: 'absolute',
    bottom: 50,
  },
  screenFirstNumber: {
    fontSize: 96,
    color: colors.gray,
    fontWeight: '200',
    alignSelf: "flex-end",
  },
  screenSecondNumber: {
    fontSize: 40,
    color: colors.gray,
    fontWeight: '200',
    alignSelf: "flex-end",
  },
});

export default Styles;