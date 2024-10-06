import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

// Reusable button component
const MyButton = ({ title, mode = "contained", onPress, style = {}, ...props }) => {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      compact
      labelStyle={{ fontWeight: 600, fontFamily:'Helvetica' }}
      style={[styles.button, style]}  // Apply default styles + custom styles
      {...props}  // Spread other props if needed
    >
      {title}
    </Button>
  );
};

// Default styles
const styles = StyleSheet.create({
  button: {
    width: 150,       // Default button width
    marginVertical: 8,  // Default margin
    borderRadius: 10,   // Default border radius
  },
});

export default MyButton;
