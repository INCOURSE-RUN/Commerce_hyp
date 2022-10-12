import Head from 'next/head';
import React from 'react';

import SignupPage from '@components/SignupPage';
import useSignUp from '@components/SignupPage/_hooks/useSignUp';

function Signup() {
  const formData = useSignUp();
  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(
    ({ name, nickname, email, phone, gender, age }) => {
      //   userMutate({ name, nickname, email, phone, gender, age });
      console.log({ name, nickname, email, phone, gender, age });
    },
  );

  return (
    <>
      <Head>
        <title>똑똑한 개발자 박하영 | 회원가입 페이지</title>
      </Head>
      <SignupPage formData={formData} onSubmit={onSubmit} />
    </>
  );
}

export default Signup;
