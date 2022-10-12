import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React from 'react';

import SignUpSuccess from '@components/SignupPage/_fragments/SignUpSuccess';

import { ROUTES } from '@constants/routes';

function SignUpSuc() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>똑똑한 개발자 | 회원 가입 성공</title>
      </Head>
      <SignUpSuccess />
    </>
  );
}

export default SignUpSuc;
