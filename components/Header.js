import { Box, Heading, Text } from '@chakra-ui/react'


function Header() {
  return (
    <Box pb="112px">
    <Box as="section" px="32px" color='#f7fafc'  bg="#6b46c1" pt="90px" pb="198px" textAlign={["left","left", "center"]}>
        <Heading fontWeight={800} fontSize={["3xl","3xl","5xl"]} >Simple pricing for your business</Heading>
        <Text fontWeight={500} fontSize={["lg","lg", "2xl"]} pt='16px'>Plans that are carefully to suit you business.</Text>
    </Box>
    </Box>
  )
}

export default Header