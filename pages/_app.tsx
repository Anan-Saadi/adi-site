import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppShell, Space, Stack } from '@mantine/core'
import { HeaderResponsive } from '../components/header'

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <AppShell
      padding={-10}
      header={ <HeaderResponsive links={[
        {link:"About", label:"About", },
        {link:"Designs", label:"Designs"},
        {link:"Contact", label:"Contact"}]}></HeaderResponsive>}>
              
            
          <Component {...pageProps} />


    </AppShell>
  )
}

export default MyApp
