import { Card, CardSection, Grid, Stack, Text, AspectRatio, Image, Group, Center, Space, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import { getAllPosts } from "../lib/firebase";


export default function Desgins({ posts }: any) {

    const media:boolean = useMediaQuery('(min-width: 900px)');


    return (
        <Stack>
            <Space h={30} />
            <Grid justify="center" gutter={0}>
                {
                    posts.map((post: any) => card("esign.jpg", post.title, post.text, post.title, media))
                }


            </Grid>


        </Stack>

    );
}


function card(imageSrc: string, title: string, summery: string, Id: string, media:boolean) {
    const span: number = media ? 4 : 10;

    return (

        <Grid.Col span={span} onClick={() => { console.log("clicked"); }}>
            <Center>
                <Link  href={{ pathname: Id, query: { title: title, text: summery } }}>

                    <Card radius="lg" withBorder>

                        <CardSection>
                            <Image src={imageSrc} height={650} />


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
                                    {/* <Text color="dimmed" size="lg" >
                                        {summery}
                                    </Text> */}
                                </Container>

                            </Center>

                        </CardSection>



                    </Card>

                </Link>

            </Center>
            <Space h={40}/>


        </Grid.Col>


    );
}
export async function getStaticProps() {
    console.log("run");
    // Call an external API endpoint to get posts
    const posts = (await getAllPosts());
    console.log(posts)

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}