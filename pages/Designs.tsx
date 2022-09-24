import { Card, CardSection, Grid, Image, Stack, Text, AspectRatio, Group, Center, Space, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Desgins() {


    return (
        <Stack>
            <Space h={30} />
            <Group>
                {/* <Space w={1000} /> */}
                <Grid justify="center" gutter="xl">
                    {card("adi.jpg", "hello", "more ahsdugasgkikluigasfkga")}
                    {card("adi.jpg", "hello", "more ahsdugasgkikluigaddddddddddddddddsfkga")}
                    {card("adi.jpg", "hello", "more ahsdugasgkikluigasfkga")}
                    {card("adi.jpg", "hello", "more ahsdugasgkikluigasfkga ")}
                    {card("adi.jpg", "hello", "more ahsdugasgkikluigaddddd\ndddaaaaaaaaaaaaaaaaaaaaaaaaaddddddddsfkga")}
                    {card("adi.jpg", "hello", "more ahsdugasgkikluigasfkga")}
                    {card("adi.jpg", "hello", "more ahsdugasgkikluigasfkga")}



                </Grid>
                {/* <Space w={100} /> */}

            </Group>

        </Stack>

    );
}


function card(imageSrc?: string, title?: string, summery?: string) {
    const span: number = useMediaQuery('(min-width: 900px)') ? 4 : 10;

    return (
        <Grid.Col span={span}>
            <Center>
                <Card radius="lg" withBorder>

                    <CardSection>
                        <Image src={imageSrc} fit="fill" />


                    </CardSection>

                    <CardSection>
                        <Center>
                            <Text weight="bold">
                                {title}
                            </Text>
                        </Center>

                    </CardSection>
                    <CardSection>
                        <Center>
                            <Container>
                                <Text color="dimmed" size="lg" >
                                    {summery}
                                </Text>
                            </Container>

                        </Center>

                    </CardSection>


                </Card>
            </Center>

        </Grid.Col>

    );
}