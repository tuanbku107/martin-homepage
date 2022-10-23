import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text
} from '@chakra-ui/react'
import NextLink from 'next/link'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>The Page you are looking for not found</Text>
      <Divider my={6}></Divider>
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to Home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}
export default NotFound
