import Friends from "./friend";

export default function FriendsList({ friends }) {
  return (
    <ul className="sidebar">
      {friends.map((friend) => (
        <Friends friend={friend} />
      ))}
    </ul>
  );
}
