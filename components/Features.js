import { HStack, Icon, Text, Box, Stack } from '@chakra-ui/react'
import {MoneyBackGuaranteeIcon,HassleFreeIcon,MonthlySubscriptionIcon} from '../components/icon/icon'

export const Feature = ({children, icon})=>{
 return (
    <HStack spacing="24px">
    <Icon as={icon} boxSize="48px" />
    <Text textAlign={["left","left","left"]} fontSize="18px" fontWeight="700">{children}</Text>
    </HStack>
 )
}

function Features() {

  return (
    <Box maxW='1024px' m="auto" pt='60px' pb='32px' as='section'>
    <Stack  direction={["column","column","row"]} px='48px' spacing='20px'>
        <Feature icon={MoneyBackGuaranteeIcon}>30 days money back Guarantee</Feature>
        <Feature icon={HassleFreeIcon}>30 days money back Guarantee</Feature>
        <Feature icon={MonthlySubscriptionIcon}>30 days money back Guarantee</Feature>
    </Stack>
    </Box>
  )
}

export default Features