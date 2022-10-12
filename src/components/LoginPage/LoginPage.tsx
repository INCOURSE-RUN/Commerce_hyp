import React from 'react';

import { Box, BoxProps, Flex, Image } from '@chakra-ui/react';

import SocialButton, { SocialType } from '@components/common/SocialButton';

import { SOCIAL } from '@constants/social';

const SOCIAL_REDIRECT_URL = `/#`;

interface NewTyps {
  social: SocialType;
  link: string;
}

const social: NewTyps = {
  social: 'kakao',
  link: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${SOCIAL.KAKAO_CLIENT_ID}&redirect_uri=${SOCIAL_REDIRECT_URL}&state=kakao`,
};

interface LoginPageContentProps extends BoxProps {}

function LoginPageContent({ ...basisProps }: LoginPageContentProps) {
  return (
    <Box {...basisProps} w="100%" h="812px" bg="#FF710B" pos="relative">
      <Image
        src="/images/login/LOGO.png"
        objectFit="cover"
        w="500px"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        pl="56px"
        pr="57px"
      />
      <Flex
        w="310px"
        h="45px"
        pos="absolute"
        top="90%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <SocialButton data={social} size="md" />
      </Flex>
    </Box>
  );
}

export default LoginPageContent;
