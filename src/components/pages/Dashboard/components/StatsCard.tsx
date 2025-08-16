import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Icon,
  Button,
} from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi'

interface StatsCardProps {
  title: string
  viewAllText: string
  icon: React.ElementType
  stats: Array<{
    label: string
    value: string | number
    color?: string
  }>
}

const StatsCard = ({ title, viewAllText, icon, stats }: StatsCardProps) => {
  return (
    <Box bg="white"  rounded="xl" border={"1px solid #E4E4E4"}>
      <Flex justify="space-between" px={4} py={3} align="center" bg="#F9FAFB" borderBottom={"#E4E4E4"}>
        <HStack gap={3}>
          <Icon as={icon} color="#4545FE" fontSize={20} />
          <Text fontSize="14px" fontWeight="500">{title}</Text>
        </HStack>
        <Button
          variant="ghost"
          fontSize="12"

          color="#4545FE"
        >
          {viewAllText}<FiArrowRight />
        </Button>
      </Flex>

      <HStack py={6} px={4} justify="space-between">
        {stats.map((stat, index) => (
          <VStack key={index} align="start" gap={2} p={0}>
            <Text fontSize="14px" color="#525252" textAlign="center">
              {stat.label}
            </Text>
            <Text
              fontSize="24px"
              fontWeight="600"

              color={"#141414"}
            >
              {stat.value}
            </Text>
          </VStack>
        ))}
      </HStack>
    </Box>
  )
}

export default StatsCard