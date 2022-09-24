
import { useDisclosure } from '@mantine/hooks'
import { MantineLogo, GithubIcon } from '@mantine/ds';
import { DiffieHellmanGroup } from 'crypto'
import type { NextPage } from 'next'
import { Stack,Image, Center,Text, Space } from "@mantine/core";
import {maria} from "../../adi/msc/about"

const Home: NextPage = () => {
 
  

  return (
    <Stack align="center">
    <Space h={30}/>
        
    
    <Center>
    <Image src="/maria.jpg" width={477} height={642}/>
   
 
    </Center>
    <Text>
        {maria}
    </Text>
    <Space h={30}/>


</Stack>

  )
}

export default Home
