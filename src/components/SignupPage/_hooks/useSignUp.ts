import { UseFormProps, useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

export type FormDataType = {
  name: string;
  nickname: string;
  gender: string;
  phone: string;
  email: string;
  age: string;
};

export const SignUpFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, '최소 2자 이상 입력해주세요.')
    .max(8, '최대길이는 8 자 입니다.')
    .required('해당 항목은 필수값 입니다.'),
  nickname: yup
    .string()
    // .min(2, '최소길이는 2 자 입니다.')
    .max(8, '최대길이는 8 자 입니다.')
    .matches(
      /[가-힣]{1,5} | [a-z|A-Z|0-9]{2,10}/,
      // /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
      '한글 1~5자, 영문 및 숫자 2~10자 사이로 입력해주세요.',
    )
    .required('해당 항목은 필수값 입니다.'),
  gender: yup.string().required('해당 항목은 필수값 입니다.'),
  phone: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .test(
      'isNumber',
      '숫자만 입력 가능합니다.',
      (val) => !Number.isNaN(Number(val)),
    )
    .min(8, '최소 길이는 8자 입니다.')
    .max(11, '최대 길이는 11자 입니다.')
    .matches(
      /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
      '정확한 핸드폰 번호를 입력해주세요',
    ),
  email: yup
    .string()
    .required('해당 항목은 필수값 입니다.')
    .email('이메일 주소를 정확하게 입력해주세요.'),
  age: yup.string().required('해당 항목은 필수값 입니다.'),
});

const useSignUp = (options?: UseFormProps<FormDataType>) => {
  return useForm<FormDataType>({
    resolver: yupResolver(SignUpFormSchema),
    mode: 'onChange',
    ...options,
  });
};

export default useSignUp;
