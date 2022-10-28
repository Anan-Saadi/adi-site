import { Stack, Title, Text, Center, Space, Container, Image, Textarea, Paper } from "@mantine/core";
import RichTextEditor from '../components/RichText';

import { useRouter } from "next/router";
import { Gallery } from "react-grid-gallery";
import { useState } from "react";

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
    const [value, onChange] = useState(text);

    return (
        <Stack>
            <Space h={10} />
            <Center>
                <Title>
                    {title}
                </Title>

            </Center>
            {/* <Textarea>
                    {text}
                </Textarea> */}
                <RichTextEditor readOnly value={value?.toString()} onChange={onChange} radius={0} id="rte" />


            <Gallery images={images} enableImageSelection={false} />




        </Stack>
    );
}