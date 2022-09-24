import { Center, Container, Group, Stack, Space, Image, Text } from "@mantine/core";
import { bio } from "../../adi/msc/about"

const WIDITH: number = 200;
export default function About() {
    return (
        <Stack>
            <Center>
                <h1>     
                    Meet Adi Saadya
                </h1>
            </Center>


            <Group align="normal">
                <Space w={WIDITH} />
                <Container  fluid >
                    <Image src="/adi.jpg" height={600} width={452} fit="contain"/>

                </Container>

                <Container size="md" >
                    <Text size="md" weight={500}>
                        {bio}
                    </Text>
                </Container>

                <Space w={WIDITH} />



            </Group>
        </Stack>





    );
}