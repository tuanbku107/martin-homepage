import { Container, Heading } from '@chakra-ui/react'

const Laptop = ({ children }) => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Laptop
      </Heading>
      {children}
    </Container>
  )
}

export default Laptop
