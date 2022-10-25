import { Stack, Title, Text, Center, Space, Container, Image} from "@mantine/core";

import { useRouter } from "next/router";
import { Gallery } from "react-grid-gallery";

export default function Post(paths: string[]) {
    // const images = paths.map((path)=>
    //          console.log(paths)
    const router = useRouter()
    const query = router.query;
    const id = query.post;
    const title = query.title;
    const text = query.text;
    console.log(id, title, text)


    const images = [
        {
           src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
           width: 320,
           height: 174,
        },
        {
           src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
           width: 320,
           height: 212,
           
           alt: "Boats (Jeshu John - designerspics.com)",
        },
      
        {
           src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
           width: 320,
           height: 212,
        },
     ];
    const url = "https://static.wixstatic.com/media/024439_1edb117526f84f01a217f9299b9b7937~mv2.png/v1/fill/w_500,h_745,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/024439_1edb117526f84f01a217f9299b9b7937~mv2.png";
    return (
        <Stack>
            <Space h={10} />
            <Center>
                <Title>
                    {title}
                </Title>

            </Center>
            <Center>
                <Text>
                    {text}
                </Text>
            </Center>
                <Gallery images={images} enableImageSelection={false}/>


            

        </Stack>
    );
}