import { useState } from "react";

export default function AddFriend({ handleFriends }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !img) return;
    const id = crypto.randomUUID();
    handleFriends({
      name,
      id,
      image: `${img}?=${id}`,
      balance: 0,
    });
  };
  return (
    <form className="form-add-friend" onSubmit={(e) => handleSubmit(e)}>
      <label>👩🏻‍🤝‍🧑🏼 Friend name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>📷 Image URL</label>
      <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
      <button className="button">Add</button>
    </form>
  );
}
