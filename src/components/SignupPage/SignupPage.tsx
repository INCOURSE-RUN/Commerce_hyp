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

import {
  CheckIcon,
  CircleCheckIconIcon,
} from '@components/common/@Icons/System/CheckBox';
import ProfileIcon from '@components/common/@Icons/System/Profile';
import FormHelper from '@components/common/FormHelper';

import { FormDataType } from './_hooks/useSignUp';

interface FormPageProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
}

const SignupPageContent = ({
  formData: {
    register,
    control,
    formState: { errors },
  },
  onSubmit,
  ...basisProps
}: FormPageProps) => {
  const router = useRouter();
  return (
    <Flex maxW="375px" h="1680px" px="16px" direction="column">
      <Image src="/images/signup/LOGO.png" w="120px" h="16px" mt="32px" />
      <Text
        color="black"
        fontWeight="700"
        fontSize="26px"
        lineHeight="38px"
        mt="40px"
      >
        회원가입
      </Text>
      <Text color="black" fontWeight="700" textStyle="md" mt="60px">
        회원정보입력
      </Text>
      <Flex justifyContent="center" alignItems="center" mt="40px">
        <ProfileIcon boxSize="100px" />
      </Flex>
      <Box as="form" {...basisProps}>
        <FormHelper
          mb="40px"
          color="primary.500"
          label="이름"
          errorText={errors.name?.message}
        >
          <Input
            placeholder="이름을 입력하세요."
            border="1px"
            borderColor="black"
            borderRadius="full"
            {...register('name')}
            autoComplete="off"
          />
        </FormHelper>

        <FormHelper
          mb="40px"
          label="닉네임"
          errorText={errors.nickname?.message}
          color="primary.500"
        >
          <Input
            placeholder="닉네임을 입력하세요."
            border="1px"
            borderColor="black"
            borderRadius="full"
            {...register('nickname')}
            autoComplete="off"
          />
        </FormHelper>

        <FormHelper
          mb="40px"
          label="핸드폰 번호"
          errorText={errors.nickname?.message}
          color="primary.500"
        >
          <Input
            placeholder="핸드폰 번호를 입력하세요."
            border="1px"
            borderColor="black"
            borderRadius="full"
            {...register('phone')}
            autoComplete="off"
          />
        </FormHelper>

        <FormHelper
          mb="40px"
          label="이메일 주소"
          errorText={errors.nickname?.message}
          color="primary.500"
        >
          <Input
            placeholder="이메일 주소를 입력하세요."
            border="1px"
            borderColor="black"
            borderRadius="full"
            {...register('email')}
            autoComplete="off"
          />
        </FormHelper>

        <Text color="black" fontWeight="700" textStyle="md" mt="80px">
          추가정보입력(선택)
        </Text>

        <Controller
          control={control}
          name="gender"
          render={({ field: { onChange } }) => (
            <FormHelper
              p="0"
              mb="50px"
              mt="40px"
              label="성별"
              color="primary.500"
              errorText={errors.gender?.message}
            >
              <Select
                onChange={onChange}
                color="rgba(26, 26, 26, 1)"
                placeholder="성별을 선택하세요"
                borderBottom="2px solid rgba(203, 206, 214, 1)"
                textColor="rgba(203, 206, 214, 1)"
              >
                <option value="남">남</option>
                <option value="여">여</option>
              </Select>
            </FormHelper>
          )}
        />

        <Controller
          control={control}
          name="age"
          render={({ field: { onChange } }) => (
            <FormHelper
              mb="80px"
              label="연령대"
              errorText={errors.age?.message}
              color="primary.500"
            >
              <Select
                borderBottom="2px solid rgba(203, 206, 214, 1)"
                color="rgba(26, 26, 26, 1)"
                onChange={onChange}
                placeholder="연령대를 선택하세요"
                textColor="rgba(203, 206, 214, 1)"
              >
                {ageOptions.map(({ value, label }) => {
                  return (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  );
                })}
              </Select>
            </FormHelper>
          )}
        />
        <Flex direction="column" w="375x" mt="80px">
          <Text color="black" fontWeight="700" textStyle="md">
            이용약관동의
          </Text>
          <Flex
            direction="row"
            justifyContent="space-between"
            borderBottom="2px solid rgba(255, 113, 11, 1)"
            h="40px"
            mt="37px"
          >
            <Text color="primary.500" fontWeight="700" textStyle="md" my="auto">
              아래 약관에 모두 동의합니다.
            </Text>
            <CircleCheckIconIcon my="auto" />
          </Flex>
          <Flex
            direction="row"
            justifyContent="space-between"
            h="40px"
            mt="37px"
          >
            <Text
              color="gray.600"
              fontWeight="400"
              textStyle="md"
              my="auto"
              borderBottom="0.5px solid rgba(140, 145, 159, 1)"
              lineHeight="16px"
            >
              서비스 이용을 위한 필수약관 동의
            </Text>
            <CheckIcon my="auto" />
          </Flex>
          <Flex
            direction="row"
            justifyContent="space-between"
            h="40px"
            mt="37px"
          >
            <Text
              color="gray.600"
              fontWeight="400"
              textStyle="md"
              my="auto"
              borderBottom="0.5px solid rgba(140, 145, 159, 1)"
              lineHeight="16px"
            >
              개인정보수집 및 이용, 제3자 제공 동의
            </Text>
            <CheckIcon my="auto" />
          </Flex>
          <Flex
            direction="row"
            justifyContent="space-between"
            h="40px"
            mt="37px"
          >
            <Text
              color="gray.600"
              fontWeight="400"
              textStyle="md"
              my="auto"
              borderBottom="0.5px solid rgba(140, 145, 159, 1)"
              lineHeight="16px"
            >
              마케팅 정보 수신 및 맟춤형 광고 동의(선택)
            </Text>
            <CheckIcon my="auto" />
          </Flex>
        </Flex>
        <Button
          w="100%"
          bg="primary.500"
          p="25px 131px"
          mt="96px"
          mb="50px"
          borderRadius="full"
          onClick={() => {
            router.push('/success');
          }}
        >
          <Text color="white" fontWeight="700" textStyle="md">
            회원가입 완료
          </Text>
        </Button>
      </Box>
    </Flex>
  );
};

export default SignupPageContent;

const ageOptions = [
  {
    value: 'under 10',
    label: '10대 이하',
  },
  {
    value: "10's",
    label: '10대',
  },
  {
    value: "20's",
    label: '20대',
  },
  {
    value: "30's",
    label: '30대',
  },
  {
    value: 'over 40',
    label: '40대 이상',
  },
];
