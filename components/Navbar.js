import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Image
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Navbar = () => {
    return (
        <nav className='relative container mx-auto p-6'>
            <div className="flex items-center justify-between">
                <div className="pt-2">
                    <h1 className='font-bold text-2xl'>WESY</h1>
                </div>
                <div className="hidden md:flex space-x-6 font-bold">
                    <a href='#'>Gift Cards</a>
                    <a href='#'>Cash App</a>
                    <a href='#'>FAQS</a>
                    <a href='#'>About</a>
                </div>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>Gift Cards</MenuButton>
                    <MenuList>
                        <MenuItem minH='48px'>
                            <Image
                                boxSize='2rem'
                                borderRadius='full'
                                src='https://placekitten.com/100/100'
                                alt='Fluffybuns the destroyer'
                                mr='12px'
                            />
                            <span>Amazon</span>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </nav>
    )
}

export default Navbar