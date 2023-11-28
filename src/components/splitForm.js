export default function SplitForm() {
  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH X</h2>
      <label> 💰 bill value</label>
      <input type="text" />
      <label> 🕴 Your expense</label>
      <input type="text" />
      <label> 👨🏻‍🤝‍👨🏻 X's expense</label>
      <input type="text" disabled />
      <label> 🤑Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <button className="button">split bill</button>
    </form>
  );
}
