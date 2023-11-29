import { useState } from "react";

export default function SplitForm({ selectedFriend, handleBill }) {
  // __________states_______
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [person, setPerson] = useState("user");
  const friendExpence = bill ? +bill - +myExpense : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill || !myExpense) return;
    handleBill(person === "user" ? friendExpence : -myExpense);
  };

  // ___________jsx_________
  return (
    <form className="form-split-bill" onSubmit={(e) => handleSubmit(e)}>
      <h2>SPLIT A BILL WITH {selectedFriend && selectedFriend.name} </h2>
      <label> 💰 bill value</label>
      <input type="text" value={bill} onChange={(e) => setBill(+e.target.value)} />
      <label> 🕴 Your expense</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) => (myExpense > bill ? bill : setMyExpense(+e.target.value))}
      />
      <label> 👨🏻‍🤝‍👨🏻 {selectedFriend && selectedFriend.name}'s expense</label>
      <input type="text" value={friendExpence} disabled />
      <label> 🤑Who is paying the bill</label>
      <select value={person} onChange={(e) => setPerson(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend && selectedFriend.name}</option>
      </select>
      <button className="button">split bill</button>
    </form>
  );
}
