import { Container, Heading } from '@chakra-ui/react'

const Works = ({ children }) => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      {children}
    </Container>
  )
}

export default Works
