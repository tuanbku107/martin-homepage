import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { CONTENT_INDEX_PAGE } from '../common/constants'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
          className="font-bold"
        >
          I&#39;m a fullstack developer
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Martin Le
            </Heading>
            <p>Fullstack dev</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/Martin.jpeg"
              alt="Profile Picture"
            ></Image>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>{CONTENT_INDEX_PAGE.WORK}</Paragraph>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          {CONTENT_INDEX_PAGE.BIO.map((bio, index) => {
            return (
              <BioSection key={index}>
                <BioYear>{bio.year}</BioYear>
                {bio.content}
              </BioSection>
            )
          })}
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
