import Friends from "./friend";

export default function FriendsList({
  friends,
  hanldeAddFriendShown,
  isAddShown,

  onSelection,
  selectedFriend,
}) {
  // ______________JSX___________
  return (
    <ul className="sidebar">
      {friends.map((friend) => (
        <Friends
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
      <button className="button" onClick={hanldeAddFriendShown}>
        {!isAddShown ? "Add friend" : "Close"}
      </button>
    </ul>
  );
}
