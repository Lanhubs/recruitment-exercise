import {
  Box,
  Flex,
  Text,
  HStack,
  Button,
  VStack,
  Grid,
  GridItem,
  IconButton,
} from '@chakra-ui/react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'
import { useDashboardStore } from '../../../../store/dashboardStore'
import StatsCard from './StatsCard'
import { FiHome, FiUsers, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const chartData = [
  { name: 'Jan', value1: 35, value2: 25, value3: 15 },
  { name: 'Feb', value1: 28, value2: 30, value3: 12 },
  { name: 'Mar', value1: 15, value2: 28, value3: 8 },
  { name: 'Apr', value1: 12, value2: 25, value3: 10 },
  { name: 'May', value1: 8, value2: 12, value3: 6 },
  { name: 'Jun', value1: 35, value2: 25, value3: 15 },
  { name: 'Jul', value1: 50, value2: 35, value3: 20 },
  { name: 'Aug', value1: 25, value2: 20, value3: 15 },
  { name: 'Sep', value1: 35, value2: 30, value3: 18 },
]
const financialOverviews = [
  {
    amount: "₦50,000,000.00",
    title: 'Total Inflow',
    percentage: 6.0,
    percentageColor: "#12B76A",
    color: '#4545FE',
  },
  {
    amount: "₦50,000,000.00",
    title: 'MRR',
    percentage: 6.0,
    percentageColor: "#12B76A",
    color: '#12B76A',
  },
  {
    amount: "₦200,000,000.00",
    title: 'Commission Revenue',
    percentage: 6.0,
    percentageColor: "#14B8A6",
    color: '#14B8A6',
  },
  {
    amount: "₦200,000,000.00",
    title: 'GMV',
    percentage: 2.0,
    percentageColor: "#F04438",
    color: "#F04438",
  },
]
const SalesOverview = () => {
  const { setTimeframe } = useDashboardStore()

  const listingsStats = [
    { label: 'Total', value: '1.8k' },
    { label: 'Active', value: '80' },
    { label: 'Archived', value: '1k' },
  ]

  const usersStats = [
    { label: 'Total', value: '20.7k' },
    { label: 'Riders', value: '8.5k' },
    { label: 'Subscribers', value: '7.5k' },
  ]


  return (
    <Grid templateColumns={{ sm: "1fr", md: "65% 34%" }} justifyContent={"space-between"}>
      <Box bg="white" borderRadius="xl" border="1.5px solid #E4E4E4">
        <Box p={4} borderBottom={"1px solid #E4E4E4"}>
          <Flex justify="space-between" align="center" mb={6}>
            <VStack align="start" gap={1}>
              <Text fontSize={{sm: "lg", md:"xl"}} fontWeight="bold" color="#191919" >Sales Overview</Text>
              <Text fontSize="sm" color="#606060">
                Showing overview Jan 2022 - Sep 2022
              </Text>
            </VStack>
            <Button px={{sm:"3", md:"5"}} py={{sm:"2", md:"3"}} rounded="3xl" borderColor="#D6D6D6" borderWidth={1} border={"1px solid #D6D6D6"} fontSize={{sm:"10", md:"12"}}>
              View Transactions
            </Button>

          </Flex>
          <HStack justifyContent={"flex-end"}  mb={{sm:"4", md:6}}>
            <Button
              variant="ghost"
              px={{sm:"3", md:"5"}}
              py="2"
              fontWeight="normal"
              color="gray.600"
              _hover={{ bg: "gray.50" }}
              onClick={() => setTimeframe('1 Week')}
            >
              1 Week
            </Button>
            <Button
              variant="ghost"
              px="4"
              py="2"
              fontWeight="normal"
              color="gray.600"
              _hover={{ bg: "gray.50" }}
              onClick={() => setTimeframe('1 Month')}
            >
              1 Month
            </Button>
            <Button
              bg="#F5F5F5"
              color="#3d3d3d"
              px="4"
              py="2"
              fontWeight="medium"
              borderRadius="md"
              _hover={{ bg: "#E5E5E5" }}
              onClick={() => setTimeframe('1 Year')}
            >
              1 Year
            </Button>
          </HStack>
        </Box>
        <Grid pr={4} pb={4} pt={4} justifyContent={"space-between"} templateColumns={{ sm: "1fr", md: "47% 52%"}} >

        <Box position="relative" p={0}>
          <IconButton
            rounded="full"
            aria-label="Previous"

            position="absolute"
            left="-5%"
            top="50%"
            children={
              <FiChevronLeft />
            }
            transform="translateY(-50%)"
            zIndex={2}
            size="sm"
            variant="ghost"

          />
          <ResponsiveContainer style={{ padding: 0, }}>
            <BarChart data={chartData} barGap={1} barCategoryGap={2} >
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                fontSize={10}
                color="#919191"
                fontWeight={"500"}
                fontStyle={"Medium"}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                fontSize={10}
                color="#919191"
                fontWeight={"500"}
                fontStyle={"Regular"}
                tickFormatter={(value) => `${value}m`}
              />
              <Bar dataKey="value1" barSize={5} fill="#4299E1" radius={[2, 2, 0, 0]} />
              <Bar dataKey="value2" barSize={5} fill="#48BB78" radius={[2, 2, 0, 0]} />
              <Bar dataKey="value3" barSize={5} fill="#ED8936" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <IconButton
            position="absolute"
            right="-10px"
            top="50%"
            rounded="full"
            transform="translateY(-50%)"
            zIndex={2}
            size="sm"
            variant="ghost"
            children={<FiChevronRight />} />
        </Box>
        <GridItem>
          <Grid templateColumns="1fr 1fr" templateRows="1fr 1fr" gap={3} >

            {
              financialOverviews.map((item, index) => (
                <Box key={index} p={4} borderRadius="xl" border={`1px solid #E4E4E4`} >
                  <Flex align="start" gap={2.5} flexDir={"column"}  >
                    <Text fontSize={{sm:"16px", md:"19px"}} fontWeight="600" color={item.color}>
                      {item.amount}
                    </Text>
                    <Flex align="center" gap={2}>
                      <Text fontSize="10px" color="gray.600">{item.title}</Text>
                      <Flex align="center" gap={1}>
                        <Box w="8px" h="8px" bg={item.percentageColor} borderRadius="full" />
                        <Text fontSize="xs" color={item.percentageColor} fontWeight="medium">
                          {item.percentage}%
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              ))
            }

          </Grid>
        </GridItem>
    </Grid>
      </Box >
  <Grid color={"#191919"} gap={6}>
    <StatsCard
      title="Listings Overview"
      viewAllText="View all"
      icon={FiHome}
      stats={listingsStats}
    />
    <StatsCard
      title="Users Overview"
      viewAllText="View all"
      icon={FiUsers}
      stats={usersStats}
    />
  </Grid>
    </Grid >

  )
}

export default SalesOverview