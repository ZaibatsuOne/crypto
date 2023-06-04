import { FC } from "react";

type TypeUserAvatarProps = {
  userAvatar: string;
  userName: string;
  width?: string;
  height?: string;
  borderRadius?: string;
};

const UserAvatar: FC<TypeUserAvatarProps> = ({
  userAvatar,
  userName,
  width = "44px",
  height = "44px",
  borderRadius = "15px",
}) => {
  return (
    <img
      src={userAvatar}
      alt={userName}
      style={{ width: width, height: height, borderRadius: borderRadius }}
    />
  );
};

export default UserAvatar;
