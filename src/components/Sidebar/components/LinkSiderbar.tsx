import { Box, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

// Types
import { ItemProps } from '../types';

interface LinkProps {
  item: ItemProps;
}

const LinkSidebar = ({ item }: LinkProps) => {
  return (
    <NavLink
      to={item.url || '#'}
      className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
    >
      <Box
        className={item.active ? 'active' : ''}
        display="flex"
        role="group"
        w="100%"
        p="10px"
        paddingLeft="20px"
        mt="4px"
        h="56px"
        alignItems="center"
        fontWeight="500"
        fontSize="14px"
        textDecoration="none"
        borderLeft="4px solid transparent"
        bg="white"
        sx={{
          '.nav-link.active & ': {
            borderLeft: 'solid 3px teal',
            backgroundColor: 'teal.50',
            color: 'teal.600',
            fontWeight: '600',
            '& svg': {
              fill: 'teal.600'
            }
          }
        }}
        _hover={{
          bg: 'white',
          color: 'teal.600',
          '& svg': {
            fill: 'teal.600'
          }
        }}
      >
        <item.icon fill="teal.600" />
        <Text ml="10px">{item.text}</Text>
      </Box>
    </NavLink>
  );
};

export default LinkSidebar;
