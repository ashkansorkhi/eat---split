export default function Friends({ friend, onSelection, selectedFriend }) {
  const isSelected = friend?.id === selectedFriend?.id;

  // _________jsx_______________
  return (
    <li key={friend.id} className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${friend.balance}
        </p>
      )}
      {friend.balance === 0 && (
        <p>
          you owe {friend.name} ${friend.balance}
        </p>
      )}
      <button className="button" onClick={() => onSelection(friend)}>
        {!isSelected ? "Select" : "Close"}
      </button>
    </li>
  );
}
