import { Box, Flex, Text, HStack } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { RiBriefcase2Fill, RiBriefcase2Line } from 'react-icons/ri'
import { PiReceipt, PiReceiptFill } from 'react-icons/pi'
import { BiReceipt, BiSolidReceipt } from 'react-icons/bi'
import { GoHome, GoHomeFill } from 'react-icons/go'
import { CiUser } from 'react-icons/ci'
import { FaUser } from 'react-icons/fa'

export interface NavItem {
  icon: IconType
  inactiveIcon?: IconType
  activeIcon?: IconType
  label: string
  href: string
}

interface NavigationProps {
  activeIndex?: number
  items?: NavItem[]
  onItemClick?: (index: number, item: NavItem) => void
}

const defaultNavItems: NavItem[] = [
  {
    icon: GoHomeFill,
    inactiveIcon: GoHome,
    label: "Dashboard",
    href: "/dashboard"
  },
  {
    icon: RiBriefcase2Fill,
    inactiveIcon: RiBriefcase2Line,
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

const Navigation = ({ 
  activeIndex = 0, 
  items = defaultNavItems, 
  onItemClick 
}: NavigationProps) => {
  const handleItemClick = (index: number, item: NavItem) => {
    if (onItemClick) {
      onItemClick(index, item)
    }
  }

  return (
    <Box 
      gap={8}
      bg={{ base: "white", md: "transparent" }}
      zIndex={"max"}
      pos={{ base: "fixed", lg: "relative" }} 
      bottom={0} 
      left={0} 
      right={0} 
      display={"flex"}
    >
      {items.map((item, idx) => {
        const isActive = idx === activeIndex
        const IconComponent = isActive 
          ? (item.activeIcon || item.icon) 
          : (item.inactiveIcon || item.icon)
        
        return (
          <Flex 
            align="center" 
            key={idx} 
            fontSize={14} 
            gap={2} 
            bg={isActive ? "#F5F5F5" : "transparent"} 
            color={isActive ? "#191919" : "#3D3D3D"}
            rounded={"md"}
            fontWeight={isActive ? "bold" : "normal"}
            px={5}
            py={2}
            cursor="pointer"
            onClick={() => handleItemClick(idx, item)}
            _hover={{ bg: isActive ? "#F5F5F5" : "gray.100" }}
            transition="all 0.2s"
          >
            <IconComponent size={24} />
            <Text display={{ base: "none", md: "flex" }}>{item.label}</Text>
          </Flex>
        )
      })}
    </Box>
  )
}

export default Navigation