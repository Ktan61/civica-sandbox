import { View } from "react-native";
import { Avatar, Button, Card, Text, ThemeProvider, useTheme } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="scale-balance" />;

export default function CardTest() {
    const theme = useTheme();

    return(
        <View>
            <Card
                style={{
                    width: 300
              }}>
                <Card.Cover source={{ uri: "https://imageio.forbes.com/specials-images/imageserve/65aebac3ef04a10bbceaa553/Women-can-do-it--Four-female-characters-walk-up-together-and-hold-arms--Girls-support/0x0.jpg?format=jpg&crop=2499,1666,x0,y165,safe&width=960" }} />
                <Card.Title
                    title="Civica"
                    titleStyle={{ fontWeight: 'bold', fontFamily:'Lato' }}
                    subtitle="Card Subtitle"
                    left={LeftContent}
                />
                <Card.Content>
                    <Text variant="bodyMedium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                        tenetur odit eveniet inventore magnam officia quia nemo porro?
                        Dolore sapiente quos illo distinctio nisi incidunt? Eaque officiis
                        iusto exercitationem natus?
                    </Text>
                </Card.Content>
                <Card.Actions>
                <Button mode="contained" onPress={() => console.log('learn more!')} compact style={{ borderRadius: 10 }}>
                    Learn More
                </Button>
                </Card.Actions>
            </Card>           
        </View>
    )
}