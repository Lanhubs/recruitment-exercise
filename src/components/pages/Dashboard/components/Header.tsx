import {
  Box,
  Flex,
  HStack,
  IconButton,
  Avatar,
  Image,
  useDisclosure,
} from '@chakra-ui/react'
import logoImage from "@/assets/Myxellia.png"

import { HugeiconsIcon } from '@hugeicons/react'
import { FaCalendarDays } from "react-icons/fa6";
import { DialpadSquareIcon, NotificationSquareIcon } from '@hugeicons/core-free-icons'
import { IoNotifications } from 'react-icons/io5';
import BudgetingModal from './budgeting-modal';
import CalendarDrawer from './calendar-drawer';
import ProfileMenu from './profile-menu';

const Header = () => {
  const { onClose, onOpen, open } = useDisclosure()
  const { onClose: closeCalendar, onOpen: openCalendar, open: isOpenCalendar } = useDisclosure()
  

  return (
    <>
      <Box bg="#191919" color="white" px={{base:"4", md:8}} py={4} pb={{base:"4",md:8}}>
        {/* Top Bar */}
        <Flex justify="space-between" align="center">
          <Image src={logoImage}  />
          <HStack gap={{sm:2, md:4}}>
            <IconButton
              aria-label="Notifications"


              variant="ghost"
              color="white"
              size="sm"
            >
              <IoNotifications />
            </IconButton>
            <BudgetingModal isOpen={open} onClose={onClose}>

              <IconButton
                aria-label="grid"
                onClick={onOpen}
                children={<HugeiconsIcon icon={DialpadSquareIcon} />}
                variant="ghost"
                color="white"
                size="sm"
              />
            </BudgetingModal>
            <IconButton
              aria-label="Calendar"
              children={<FaCalendarDays />}
              onClick={openCalendar}
              variant="ghost"
              color="white"
              size="sm"
            />
            <IconButton
              aria-label="Shield"
              children={<HugeiconsIcon icon={NotificationSquareIcon} />}
              variant="ghost"
              color="white"
              size="sm"
            />
            <ProfileMenu >
              <Avatar.Root bg="white">
                <Avatar.Fallback fontSize="sm" name="D" color="#191919" />
              </Avatar.Root>
            </ProfileMenu>
          </HStack>
        </Flex>

        {/* Navigation */}

      </Box>
      <CalendarDrawer isOpen={isOpenCalendar} onClose={closeCalendar} />
    </>
  )
}

export default Header