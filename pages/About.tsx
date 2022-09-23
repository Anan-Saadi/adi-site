import { Center, Container, Group, Stack } from "@mantine/core";
import {fuck} from "../../adi/msc/about"
import Image from 'next/image'


export default function About() {
    return (
        <>
        <Center>
        <h1>
            Meet Adi Saadya

            </h1>
        </Center>
            
        
        <Group position="center" spacing="lg">
                    <Image src="/adi.jpg" height={600} width={452}></Image>
                  <div>
                    {fuck}

                  </div>
            </Group>
        </>
       
            

    );
}