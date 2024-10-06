import { ScrollView, View, StyleSheet } from "react-native";
import { Avatar, Text, useTheme } from "react-native-paper";
import React, {useState} from 'react';
import CardTest from "@/components/CardTest";
import MyButton from "@/components/ButtonTest";

export default function Index() {

  const theme = useTheme();

  return (
    <ScrollView
      style={{
        flex: 1,
        margin: 16,
      }}
    >
      <View style={styles.cardTest}>
        <CardTest/>
        <CardTest/>
      </View>
      <View>
          <MyButton
            title="Button 1" 
            mode="text" 
            onPress={() => console.log('Button 1 is text')} 
          />
          <MyButton 
            title="Button 3" 
            mode="contained-tonal" 
            onPress={() => console.log('Button 3 is contained-tonal')}
           />
          <MyButton 
            title="Button 4" 
            mode="elevated" 
            onPress={() => console.log('Button 4 is elevated')}
            textColor={theme.colors.secondary}
          />
          <MyButton 
            title="Button 5" 
            mode="contained" 
            onPress={() => console.log('Button 5 is contained')}
          />
          <MyButton 
            title="Button 5 Blue" 
            mode="contained" 
            onPress={() => console.log('Button 5 but blue')}
            buttonColor={theme.colors.secondary}
          />
          <MyButton 
            title="Button 5 Periwinkle" 
            mode="contained" 
            onPress={() => console.log('Button 5 but periwinkle')}
            buttonColor={theme.colors.periwinkleContainer}
            textColor={theme.colors.periwinkle}
          />
          <MyButton 
            title="Button 5 Peach" 
            mode="contained" 
            onPress={() => console.log('Button 5 but peach')}
            buttonColor={theme.colors.tertiaryContainer}
            textColor={theme.colors.primary}
          />
          <MyButton 
            title="Button 6" 
            mode="outlined" 
            onPress={() => console.log('Button 6 but peach')}
            contentStyle={{
              borderColor: theme.colors.primary
            }}
          />
          <MyButton 
            title="Button 6 Blue" 
            mode="outlined" 
            onPress={() => console.log('Button 6 but peach')}
            textColor={theme.colors.secondary}
            contentStyle={{
              borderColor: theme.colors.secondary
            }}
          />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardTest: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20
  }
});