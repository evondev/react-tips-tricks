export interface UserProfileProps {
  avatar?: string;
  name?: string;
  status?: string;
  age?: number;
  isAdmin?: boolean;
}
export default function UserProfile({
  avatar = "https://avatars.githubusercontent.com/u/66494490?v=4",
  name = "Anonymous",
  age = 0,
  status = "offline",
  isAdmin = false,
}: UserProfileProps) {
  return (
    <div className="flex gap-2">
      <span>{avatar}</span>
      <span>{name}</span>
      <span>{status}</span>
      <span>{age}</span>
      {isAdmin && <span>Admin</span>}
    </div>
  );
}
