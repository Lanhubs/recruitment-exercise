import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerRoot,
    DrawerTrigger,
    Box,
    VStack,
    HStack,
    Text,
    IconButton,
    Grid,
    GridItem,
    Flex,
    Portal,
} from "@chakra-ui/react"
import { ReactNode, useState } from "react"
import { FiChevronLeft, FiChevronRight, FiX, FiArrowLeft } from "react-icons/fi"

// Calendar data and utilities
const DAYS_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT']
const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

// Get days in month
const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
}

// Get first day of month (0 = Sunday, 1 = Monday, etc.)
const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
}

// Get previous month's last days to fill the grid
const getPreviousMonthDays = (year: number, month: number, count: number) => {
    const prevMonth = month === 0 ? 11 : month - 1
    const prevYear = month === 0 ? year - 1 : year
    const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth)

    return Array.from({ length: count }, (_, i) => ({
        day: daysInPrevMonth - count + i + 1,
        isCurrentMonth: false,
        isNextMonth: false
    }))
}

// Get next month's first days to fill the grid
const getNextMonthDays = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
        day: i + 1,
        isCurrentMonth: false,
        isNextMonth: true
    }))
}

// Generate calendar grid
const generateCalendarDays = (year: number, month: number) => {
    const daysInMonth = getDaysInMonth(year, month)
    const firstDay = getFirstDayOfMonth(year, month)

    // Previous month days
    const prevMonthDays = getPreviousMonthDays(year, month, firstDay)

    // Current month days
    const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => ({
        day: i + 1,
        isCurrentMonth: true,
        isNextMonth: false
    }))

    // Next month days to fill remaining slots (42 total slots for 6 weeks)
    const totalDays = prevMonthDays.length + currentMonthDays.length
    const remainingSlots = 42 - totalDays
    const nextMonthDays = getNextMonthDays(remainingSlots)

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays]
}

interface CalendarDrawerProps {
    isOpen: boolean
    onClose: () => void
    trigger?: ReactNode
    selectedDate?: Date
    onDateSelect?: (date: Date) => void
}

const CalendarDrawer = ({
    isOpen,
    onClose,
    trigger,
    selectedDate = new Date(2023, 10, 16), // November 16, 2023
    onDateSelect
}: CalendarDrawerProps) => {
    const [currentDate, setCurrentDate] = useState(new Date(2023, 10, 1)) // November 2023

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const calendarDays = generateCalendarDays(year, month)

    const goToPreviousMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1))
    }

    const goToNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1))
    }

    const handleDateClick = (day: number, isCurrentMonth: boolean, isNextMonth: boolean) => {
        if (!isCurrentMonth) return

        const newDate = new Date(year, month, day)
        onDateSelect?.(newDate)
    }

    const isSelectedDate = (day: number, isCurrentMonth: boolean) => {
        if (!isCurrentMonth || !selectedDate) return false
        return (
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === month &&
            selectedDate.getFullYear() === year
        )
    }

    return (
        <DrawerRoot open={isOpen} onOpenChange={({ open }) => !open && onClose()} placement="end">
            {trigger && <DrawerTrigger asChild>{trigger}</DrawerTrigger>}
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>

                    <DrawerContent
                        className="euclid"
                        bg="gray.900"
                        color="white"
                        maxW={{ base: "100vw", md: "400px" }}
                        h="100vh"
                    >
                        {/* Header */}
                        <DrawerHeader p={4} borderBottom="1px solid" borderColor="gray.700" as={Flex} alignItems="center" justifyContent="space-between">

                            <HStack gap={3}>
                                <IconButton
                                    aria-label="Back"
                                    children={<FiArrowLeft />}
                                    variant="ghost"
                                    color="white"
                                    size="sm"
                                    onClick={onClose}
                                />
                                <Text fontSize="lg" fontWeight="medium">
                                    Calendar
                                </Text>
                            </HStack>
                            <IconButton
                                aria-label="Close"
                                children={<FiX />}
                                variant="ghost"
                                color="white"
                                size="sm"
                                onClick={onClose}
                            />
                        </DrawerHeader>

                        <DrawerBody p={4}>
                            <VStack gap={6} align="stretch">
                                {/* Month Navigation */}
                                <Flex align="center" justify="space-between">
                                    <IconButton
                                        aria-label="Previous month"
                                        children={<FiChevronLeft />}
                                        variant="ghost"
                                        color="white"
                                        size="sm"
                                        onClick={goToPreviousMonth}
                                    />
                                    <Text fontSize="lg" fontWeight="medium">
                                        {MONTHS[month]} {year}
                                    </Text>
                                    <IconButton
                                        aria-label="Next month"
                                        children={<FiChevronRight />}
                                        variant="ghost"
                                        color="white"
                                        size="sm"
                                        onClick={goToNextMonth}
                                    />
                                </Flex>

                                {/* Calendar Grid */}
                                <Box>
                                    {/* Days of week header */}
                                    <Grid templateColumns="repeat(7, 1fr)" gap={1} mb={2}>
                                        {DAYS_OF_WEEK.map((day) => (
                                            <GridItem key={day}>
                                                <Text
                                                    fontSize="xs"
                                                    color="gray.400"
                                                    textAlign="center"
                                                    fontWeight="medium"
                                                    py={2}
                                                >
                                                    {day}
                                                </Text>
                                            </GridItem>
                                        ))}
                                    </Grid>

                                    {/* Calendar days */}
                                    <Grid templateColumns="repeat(7, 1fr)" gap={1}>
                                        {calendarDays.map((dayObj, index) => {
                                            const { day, isCurrentMonth, isNextMonth } = dayObj
                                            const isSelected = isSelectedDate(day, isCurrentMonth)

                                            return (
                                                <GridItem key={index}>
                                                    <Box
                                                        as="button"
                                                        w="full"
                                                        h="40px"
                                                        display="flex"
                                                        alignItems="center"
                                                        justifyContent="center"
                                                        borderRadius="md"
                                                        fontSize="sm"
                                                        fontWeight="medium"
                                                        color={
                                                            !isCurrentMonth
                                                                ? "gray.600"
                                                                : isSelected
                                                                    ? "white"
                                                                    : "gray.300"
                                                        }
                                                        bg={isSelected ? "blue.500" : "transparent"}
                                                        _hover={
                                                            isCurrentMonth
                                                                ? {
                                                                    bg: isSelected ? "blue.600" : "gray.700",
                                                                    color: "white"
                                                                }
                                                                : {}
                                                        }
                                                        _active={
                                                            isCurrentMonth
                                                                ? {
                                                                    bg: isSelected ? "blue.700" : "gray.600"
                                                                }
                                                                : {}
                                                        }
                                                        cursor={isCurrentMonth ? "pointer" : "default"}
                                                        onClick={() => handleDateClick(day, isCurrentMonth, isNextMonth)}
                                                    >
                                                        {day}
                                                        {/* Show "DEC 1" for December 1st */}
                                                        {isNextMonth && day === 1 && (
                                                            <Text fontSize="xs" color="gray.500" ml={1}>
                                                                DEC
                                                            </Text>
                                                        )}
                                                    </Box>
                                                </GridItem>
                                            )
                                        })}
                                    </Grid>
                                </Box>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer.Positioner>
            </Portal>
        </DrawerRoot>
    )
}

export default CalendarDrawer