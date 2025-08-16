import {
  Box,
  Container,
  VStack,
  Text,
  Input,
  InputGroup,
  HStack,
} from '@chakra-ui/react'

import Header from './components/Header'
import SalesOverview from './components/SalesOverview'
import PropertyCards from './components/PropertyCards'
import Navigation, { NavItem } from './components/Navigation'
import { FiSearch } from "react-icons/fi"
const Dashboard = () => {
  const handleNavItemClick = (_: number, item: NavItem) => {
    console.log('Navigation clicked:', item.label, item.href)
    // Add your navigation logic here
  }

  return (
    <Box minH="100vh" bg="gray.50" className='euclid'>
      <Header />

      <Container p={{ sm: 4, md: 8 }} >
        {/* navigation */}
        <HStack
          justify="space-between"
          align="center"
          gap={{ sm: 4, md: 8 }}
        >
          {/* Navigation Items */}
          <Navigation
            activeIndex={0}
            onItemClick={handleNavItemClick}
          />

          {/* search bar */}
          <InputGroup startElement={<FiSearch color="#3D3D3D" />} w={{ base: "full", md: "20%" }} my={{ base: "4", md: "" }}>

            <Input
              placeholder="Search listings, users here..."
              bg="#F5F5F5"
              rounded={"md"}

              border="none"
              color="white"
              _placeholder={{ color: 'gray.400' }}
            />
          </InputGroup>
        </HStack>

        <VStack gap={8} align="stretch">
          {/* Welcome Section */}
          <Box mt={4} >
            <Text fontSize={{ sm: "xl", md: "2xl" }} color="#191919" fontWeight="600" >
              Welcome, Ahmed
            </Text>
          </Box>

          {/* Sales Overview */}
          <SalesOverview />



          {/* Property Cards */}
          <PropertyCards />
        </VStack>
      </Container>
    </Box>
  )
}



export default Dashboard