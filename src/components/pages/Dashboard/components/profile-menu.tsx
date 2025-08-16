import {
    Menu,
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
    Avatar,
    Box,
    VStack,
    HStack,
    Text,
    Icon,
    Portal,
} from "@chakra-ui/react"
import { UserGroup02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { ReactNode } from "react"
import { IoMdUnlock } from "react-icons/io"
import { MdOutlineSecurity } from "react-icons/md"
import { RiContactsFill } from "react-icons/ri"

// Custom icons to match the design







const LogoutIcon = () => (
    <Icon viewBox="0 0 24 24" w={5} h={5}>
        <path
            fill="currentColor"
            d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"
        />
    </Icon>
)

interface ProfileMenuProps {
    children?: ReactNode
    userName?: string
    userEmail?: string
    userAvatar?: string
    onTeamsClick?: () => void
    onContactPersonsClick?: () => void
    onChangePasswordClick?: () => void
    onTwoFactorClick?: () => void
    onLogoutClick?: () => void
}

const ProfileMenu = ({
    children,
    userName = "Dylan Frank",
    userEmail = "dylan96@mail.com",
    onTeamsClick,
    onContactPersonsClick,
    onChangePasswordClick,
    onTwoFactorClick,
    onLogoutClick,
}: ProfileMenuProps) => {
    // Generate avatar from name if no avatar provided

    return (
        <MenuRoot positioning={{ placement: "bottom-end" }} >
            {children && <MenuTrigger >{children}</MenuTrigger>}
            <Portal>
                <Menu.Positioner>

                    <MenuContent
                        minW={"350px"}
                        p={0}
                        borderRadius="lg"
                        boxShadow="sm"
                        shadowColor={"gray.50"}
                        border="1px solid"
                        bg="white"
                        fontFamily={"euclid"}
                    >
                        {/* User Profile Section */}
                        <Box p={4} bg="#F9FAFB" border="1px solid #E4E4E4" rounded="md" m="2">
                            <HStack gap={3} align="center">
                                <Avatar.Root
                                    size="md"

                                    bg="green.500"
                                    color="white"
                                    fontWeight="bold"
                                >
                                    <Avatar.Fallback name={userName} />

                                </Avatar.Root>
                                <VStack align="start" gap={0} flex={1}>
                                    <Text fontSize="lg" fontWeight="semibold" color="gray.900">
                                        {userName}
                                    </Text>
                                    <Text fontSize="sm" color="#141414">
                                        {userEmail}
                                    </Text>
                                </VStack>
                            </HStack>
                        </Box>

                        {/* Menu Items */}
                        <MenuItem
                            onClick={onTeamsClick}
                            
                            

                            cursor="pointer"
                            px={5} py={4}
                            value="Teams"
                        >
                            <HStack gap={3} w="full" >
                                <HugeiconsIcon color="#52525B" icon={UserGroup02Icon} />
                                <Text fontSize="md" color="#141414" fontWeight="medium">
                                    Teams
                                </Text>
                            </HStack>
                        </MenuItem>

                        <MenuItem
                            onClick={onContactPersonsClick}
                            
                            

                            value="Contact Persons"
                            cursor="pointer"
                            px={5} py={4}
                        >
                            <HStack gap={3} w="full" >
                                <RiContactsFill color="#52525B" size={20} />
                                <Text fontSize="md" color="#141414" fontWeight="medium">
                                    Contact Persons
                                </Text>
                            </HStack>
                        </MenuItem>

                        <MenuItem
                            value="Change Password"
                            onClick={onChangePasswordClick}
                            
                            

                            cursor="pointer"
                            px={5} py={4}
                        >
                            <HStack gap={3} w="full" >
                                <IoMdUnlock color="#52525B" size={20} />
                                <Text fontSize="md" color="#141414" fontWeight="medium">
                                    Change password
                                </Text>
                            </HStack>
                        </MenuItem>

                        <MenuItem
                            onClick={onTwoFactorClick}
                            
                            

                            cursor="pointer"
                            px={5} py={4}
                            value="2-Factor Authentication"
                        >
                            <HStack gap={3} w="full" >
                                <MdOutlineSecurity color="#52525B" size={20} />
                                <Text fontSize="md" color="#141414" fontWeight="medium">
                                    2 - Factor Authentication
                                </Text>
                            </HStack>
                        </MenuItem>

                        <Menu.Separator my={2} color="#E4E4E4" bg="#E4E4E4"/>

                        <MenuItem
                            value="Logout"
                            onClick={onLogoutClick}
                            
                            
                            _hover={{ bg: "red.50" }}
                            cursor="pointer"
                            px={5} py={4}
                        >
                            <HStack gap={3} w="full" >
                                <LogoutIcon />
                                <Text fontSize="md" color="red.500" fontWeight="medium">
                                    Logout
                                </Text>
                            </HStack>
                        </MenuItem>

                    </MenuContent>
                </Menu.Positioner>
            </Portal>
        </MenuRoot>
    )
}

export default ProfileMenu