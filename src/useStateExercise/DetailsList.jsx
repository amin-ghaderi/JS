function DetailsList({ items, onSelect }) {
  return (
    <ul className="list">
      {items.map((text, index) => (
        <li key={text} className="list-item">
          <span>{text}</span>
          <button type="button" onClick={() => onSelect({ index, text })}>
            Details
          </button>
        </li>
      ))}
    </ul>
  );
}

export default DetailsList;
