import { Icon, IconProps } from '@chakra-ui/react';

const ProfileIcon2 = ({ ...props }: IconProps) => {
  return (
    <Icon viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="currentColor"
      />
      <path
        d="M9.66602 5.16599V14.166"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14.166 9.66599H5.16602"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Icon>
  );
};

export default ProfileIcon2;
