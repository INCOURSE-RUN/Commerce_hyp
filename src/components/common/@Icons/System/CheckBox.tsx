import { Icon, IconProps } from '@chakra-ui/react';

export const CircleCheckIconIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...props} fill="none" width="25px" height="25px">
    <path
      d="M23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25C18.2132 23.25 23.25 18.2132 23.25 12Z"
      stroke="#CBCED6"
      strokeWidth="1.5"
    />
    <path
      d="M6.3894 11.7523L10.7304 15.9652L16.9984 8.61621"
      stroke="#CBCED6"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export const CheckIcon = (props: IconProps) => (
  <Icon fill="none" width="25px" height="25px" viewBox="0 0 24 24" {...props}>
    <path
      d="M5.843 11.3302L10.532 17.2472L17.465 7.51025"
      stroke="#CBCED6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
