import { FC } from "react";

type TypeUserAvatarProps = {
  userAvatar: string;
};

const UserAvatar: FC<TypeUserAvatarProps> = ({ userAvatar }) => {
  return <img src={userAvatar} className="rounded-[15px] w-11 h-11" />;
};

export default UserAvatar;
