import {
    Dialog,
    DialogBody,
    DialogContent,
    DialogHeader,
    DialogRoot,
    Box,
    VStack,
    HStack,
    Text,
    Button,
    Portal,

} from "@chakra-ui/react"
import { FilterHorizontalIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { ReactNode } from "react"
import { IoBarChartOutline } from "react-icons/io5"

// Calculator icon component
const CalculatorIcon = () => (
    <Box
        w={{ base: "50px", sm: "60px" }}
        h={{ base: "50px", sm: "60px" }}
        bg="white"
        borderRadius={{ base: "12px", sm: "16px" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        mx="auto"
    >
        <svg /* width={{ base: "24", sm: "32" }} height={{ base: "24", sm: "32" }} */ width={32} viewBox="0 0 32 32" fill="none">
            <rect x="6" y="4" width="20" height="24" rx="4" stroke="#1a365d" strokeWidth="2" fill="none" />
            <rect x="10" y="8" width="12" height="4" rx="2" stroke="#1a365d" strokeWidth="1.5" fill="none" />
            <circle cx="11" cy="16" r="1.5" fill="#1a365d" />
            <circle cx="16" cy="16" r="1.5" fill="#1a365d" />
            <circle cx="21" cy="16" r="1.5" fill="#1a365d" />
            <circle cx="11" cy="20" r="1.5" fill="#1a365d" />
            <circle cx="16" cy="20" r="1.5" fill="#1a365d" />
            <circle cx="21" cy="20" r="1.5" fill="#1a365d" />
        </svg>
    </Box>
)

// Feature item component
const FeatureItem = ({ icon, title, description }: {
    icon: ReactNode
    title: string
    description: string
}) => (
    <HStack align="start" gap={{ base: 4, sm: 6 }} px={{ base: 2, sm: 3 }} w="full" className="euclid">
        <Box mt={1} color="#52525B" flexShrink={0}>{icon}</Box>
        <VStack align="start" gap={1} flex={1}>
            <Text fontSize={{ base: "14px", sm: "16px" }} fontWeight="semibold" color="#191919" lineHeight="1.3">
                {title}
            </Text>
            <Text fontSize={{ base: "11px", sm: "12px" }} color="#606060" lineHeight="1.5">
                {description}
            </Text>
        </VStack>
    </HStack>
)

const ChartIcon = () => (
    <Box w="6" h="6" border="2px solid" borderColor="gray.400" borderRadius="md" p="1">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 14L6 8L10 12L14 4" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    </Box>
)


interface BudgetingModalProps {
    isOpen: boolean
    onClose: () => void
    children?: ReactNode
}

const BudgetingModal = ({ isOpen, onClose, children }: BudgetingModalProps) => {
    return (
        <>
            {children}
            <DialogRoot open={isOpen} onOpenChange={({ open }) => !open && onClose()}>
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>

                        <DialogContent
                            bg="#0C2841"
                            maxW={{ base: "90vw", sm: "md" }}
                            w={{ base: "90vw", sm: "auto" }}
                            p={0}
                            borderRadius="xl"
                            shadow={"none"}
                            dropShadow={"none"}
                            overflow="hidden"
                            mx={{ base: 4, sm: "auto" }}
                        >
                            {/* Header with dark blue background */}

                            <DialogHeader
                                h={{ base: "160px", sm: "200px" }}
                                position="relative"
                                display="flex"
                                pt={{ base: "15%", sm: "20%" }}
                                w="full"
                                overflow={"hidden"}
                                justifyContent="center"
                            >
                                {/* Background pattern/texture */}
                                <Box
                                    position="absolute"
                                    inset={0}
                                    opacity={0.1}
                                    bg="#061520"
                                    w="70%"
                                    h="70%"
                                />
                                <CalculatorIcon />
                            </DialogHeader>
                            <DialogBody bg="white" px={{ base: 4, sm: 8 }} py={{ base: 3, sm: 4 }}>
                                <VStack gap={{ base: 6, sm: 8 }} align="stretch">
                                    {/* Features list */}
                                    <VStack gap={{ base: 4, sm: 6 }} align="stretch">
                                        <FeatureItem
                                            icon={<HugeiconsIcon color="#52525B" icon={FilterHorizontalIcon} />}
                                            title="Set up annual budgets by account category"
                                            description="Allocate funds across income and expense lines with full visibility."
                                        />

                                        <FeatureItem
                                            icon={<ChartIcon />}
                                            title="Track actuals vs budget in real time"
                                            description="See how your community is performing against plan, month by month."
                                        />

                                        <FeatureItem
                                            icon={<IoBarChartOutline />}
                                            title="Adjust figures and forecast with ease"
                                            description="Edit amounts, apply percentage changes, or roll forward last year's data—all in one place."
                                        />
                                    </VStack>

                                    {/* Create Budget Button */}
                                    <Button
                                        bg="#18181B"
                                        color="white"
                                        size={{ base: "md", sm: "lg" }}
                                        borderRadius="full"
                                        py={{ base: 4, sm: 6 }}
                                        px={{ base: 6, sm: 8 }}
                                        fontSize={{ base: "sm", sm: "md" }}
                                        fontWeight="medium"
                                        _hover={{ bg: "gray.800" }}
                                        _active={{ bg: "gray.700" }}
                                        onClick={onClose}
                                        w="full"
                                    >
                                        Create Budget
                                    </Button>
                                </VStack>
                            </DialogBody>
                        </DialogContent>
                    </Dialog.Positioner>
                </Portal>

            </DialogRoot>
        </>
    )
}

export default BudgetingModal