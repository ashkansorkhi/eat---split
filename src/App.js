import FriendsList from "./components/friendsList";
import AddFriend from "./components/addFriend";
import SplitForm from "./components/splitForm";

import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  // _________________states___________
  const [isAddShown, setIsShown] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  const [selectedFriend, setSelectedFriend] = useState(null);
  // ____________handleEvent______________
  const hanldeAddFriendShown = () => {
    setIsShown((isAddShown) => !isAddShown);
    setSelectedFriend(null);
  };

  const handleFriends = (friend) => {
    setFriends([...friends, friend]);
  };

  const handleSelectedFriend = (friend) => {
    setSelectedFriend((selected) => (selected?.id === friend?.id ? null : friend));
    setIsShown(false);
  };
  const handleBill = (value) => {
    setFriends((friends) =>
      friends.map((fr) =>
        fr.id === selectedFriend?.id ? { ...fr, balance: fr.balance + value } : fr
      )
    );
    setSelectedFriend(null);
  };
  // _________________jsx______________
  return (
    <div className="app">
      <FriendsList
        friends={friends}
        hanldeAddFriendShown={hanldeAddFriendShown}
        isAddShown={isAddShown}
        onSelection={handleSelectedFriend}
        selectedFriend={selectedFriend}
      />
      {isAddShown && <AddFriend handleFriends={handleFriends} />}
      {selectedFriend && (
        <SplitForm selectedFriend={selectedFriend} handleBill={handleBill} />
      )}
    </div>
  );
}
