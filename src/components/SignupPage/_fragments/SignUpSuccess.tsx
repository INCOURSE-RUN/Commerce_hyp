import { useRouter } from 'next/router';
import React from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

import { Flex, Image, Select, Text } from '@chakra-ui/react';
import {
  Box,
  BoxProps,
  Button,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';

import HandsClap from '@components/common/@Icons/System/HandsClap';

function SignUpSuccess({ ...basisProps }: BoxProps) {
  const router = useRouter();
  return (
    <Box {...basisProps} w="100%" h="812px" pos="relative" px="16px">
      <Flex mt="80px" w="100%" h="100px" direction="column">
        <Text fontWeight="700" textStyle="xl">
          회원가입이 <br /> 완료되었습니다.
        </Text>
        <Text mt="5px" fontWeight="400" textStyle="sm">
          관심사별로 자유롭게 소통해보세요!
        </Text>
      </Flex>
      <Box w="216px" mx="auto" mt="100px">
        <HandsClap />
      </Box>
      <Button
        w="100%"
        bg="primary.500"
        p="25px 131px"
        mt="237px"
        mb="30px"
        borderRadius="full"
        onClick={() => {
          router.push('/');
        }}
      >
        <Text color="white" fontWeight="700" textStyle="md">
          시작하기
        </Text>
      </Button>
    </Box>
  );
}

export default SignUpSuccess;
