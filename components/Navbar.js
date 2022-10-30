import { Box, Heading, HStack, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

const NavLinks = [
    { label: 'Docs', link: '#docs' },
    { label: 'CLI', link: '#CLI' },
    { label: 'Enterprise', link: '#Enterprise' },
    { label: 'Pricing', link: '#Pricing' } 
]

const Navbar = () => {
    return (
        <Box as='nav' bg='black' color='white' py='2'>
            <HStack spacing='10'>
                <Heading as='h4' size='md'>
                    Midas Hackers
                </Heading>
                <NextLink href='#' passHref>
                    <Link
                        fontWeight='bold'
                        _hover={{
                            color: 'orange.600'
                        }}>
                        Docs
                    </Link>
                </NextLink>
                <NextLink href='#' passHref>
                    <Link
                        fontWeight='bold'
                        _hover={{
                            color: 'orange.600'
                        }}>
                        CLI
                    </Link>
                </NextLink>
                <NextLink href='#' passHref>
                    <Link
                        fontWeight='bold'
                        _hover={{
                            color: 'orange.600'
                        }}>
                        Enterprise
                    </Link>
                </NextLink>
                <NextLink href='#' passHref>
                    <Link
                        fontWeight='bold'
                        _hover={{
                            color: 'orange.600'
                        }}>
                        Pricing
                    </Link>
                </NextLink>
            </HStack>

        </Box>
    )
}

export default Navbar