import {
  Box,
  Grid,
  Text,
  Badge,
  AspectRatio,
} from '@chakra-ui/react'
import { useDashboardStore } from '../../../../store/dashboardStore'
import estateimg from "@/assets/estate.jpg"
const PropertyCards = () => {
  const { properties } = useDashboardStore()

  const getBadgeColor = (category: string) => {
    switch (category) {
      case 'MOST CLICKED':
        return 'blue'
      case 'MOST WATCHLISTED':
        return 'purple'
      case 'HOTTEST LISTING':
        return 'red'
      default:
        return 'gray'
    }
  }

  return (
    <Grid templateColumns={{base:"1fr", md:"1fr 1fr 1fr"}} gap={6}>
      {properties.map((property) => (
        <Box
          key={property.id}

          borderRadius="lg"
          bgPos={"center"}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          style={{
            backgroundImage: `url(${estateimg})`,
          }}
          overflow="hidden"
          position="relative"
        >
          <AspectRatio ratio={16 / 10}>
            <Box
              bgGradient="linear(to-br, blue.400, purple.500)"
              position="relative"

            >



              {/* Category badge */}
            </Box>
          </AspectRatio>
          <Box p={4} mt="auto" >
            <Badge
             
              colorScheme={getBadgeColor(property.category)}
              fontSize="xs"
              px={2}
              py={1}
            >
              {property.category}
            </Badge>
            <Text fontSize="lg" fontWeight="bold" color="white">
              {property.title}
            </Text>
          </Box>

        </Box>
      ))}
    </Grid>
  )
}

export default PropertyCards