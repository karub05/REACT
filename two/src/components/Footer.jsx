import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/layout';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'10'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Let's do it ...
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius={'none'}
              focusBorderColor="none"
            />
            <Button
              p={0}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={['0 20px 20px 0']}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            Gintama
          </Heading>
          <text>@All rights ki MaKiChuu...</text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'blank'} href="https://instagram.com/__karub__/">
              Instagram
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'blank'} href="https://github.com/karub05">
              Github
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'blank'} href="https://facebook.com/karub05/">
              Facebook
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};


export default Footer;
