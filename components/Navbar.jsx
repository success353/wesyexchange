import { Box, HStack, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <Box as='nav'>
            <HStack>
                <NextLink passHref=''>
                    <Link></Link>
                </NextLink>
            </HStack>

        </Box>
    )
}

export default Navbar