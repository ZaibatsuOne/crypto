const UserAvatar = ({ userAvatar }: { userAvatar: string }) => {
  return <img src={userAvatar} className="rounded-[15px] w-11 h-11" />;
};

export default UserAvatar;
