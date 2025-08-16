import {
  Box,
  Container,
  VStack,
  Text,
  Grid,
  GridItem,
  Input,
  InputGroup,
  Flex,
  HStack,

} from '@chakra-ui/react'

import Header from './components/Header'
import SalesOverview from './components/SalesOverview'
import StatsCard from './components/StatsCard'
import PropertyCards from './components/PropertyCards'
import { useDashboardStore } from '../../../store/dashboardStore'
import {

  FiSearch,
} from "react-icons/fi"
import { RiBriefcase2Fill, RiBriefcase2Line } from 'react-icons/ri'
import { PiReceipt, PiReceiptFill } from 'react-icons/pi'
import { BiReceipt, BiSolidReceipt } from 'react-icons/bi'
import { GoHome, GoHomeFill } from 'react-icons/go'
import { CiUser } from 'react-icons/ci'
import { FaUser } from 'react-icons/fa'
const Dashboard = () => {


  return (
    <Box minH="100vh" bg="gray.50" className='euclid'>
      <Header />

      <Container p={{ sm: 4, md: 8 }} >
        <HStack
          justify="space-between"
          align="center"
          gap={{ sm: 4, md: 8 }}
        >
          {/* Navigation Items */}

          <Box gap={8}
            bg={{ base: "white", md: "transparent" }}
            
            pos={{ base: "fixed", lg: "relative" }} bottom={0} left={0} right={0} display={"flex"}>

            {
              navItems.map((item, idx) => (
                <Flex align="center" key={idx} fontSize={14} gap={2} bg={idx === 0 ? "#F5F5F5" : "transparent"} color={idx === 0 ? "#191919" : "#3D3D3D"}
                  rounded={"md"}
                  fontWeight={idx === 0 ? "bold" : "normal"}
                  px={5}
                  py={2}
                >
                  <item.icon size={24} />
                  <Text display={{base: "none", md: "flex"}}>{item.label}</Text>
                </Flex>
              ))
            }
          </Box>

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



const navItems = [
  {
    icon: GoHomeFill,
    inactiveIcon: GoHome,
    label: "Dashboard",
    href: "/dashboard"
  },
  {
    icon: RiBriefcase2Fill,
    inactiveIcon: RiBriefcase2Line
    ,
    label: "Listings",
    href: "/dashboard"
  },
  {
    icon: CiUser,
    activeIcon: FaUser,
    label: "Users",
    href: "/dashboard"
  },
  {
    icon: PiReceipt,
    activeIcon: PiReceiptFill,
    label: "Request",
    href: "/request"
  },
  {
    icon: BiReceipt,
    activeIcon: BiSolidReceipt,
    label: "Applications",
    href: "/request"
  },


]
export default Dashboard