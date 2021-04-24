import Head from 'next/head'
import { Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nextjs + ChakraUI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1> Create Nextjs app with ChakraUI</h1>
      <Button colorScheme="red">Start Buliding Apps with ChakraUI</Button>
    </div>
  )
}
