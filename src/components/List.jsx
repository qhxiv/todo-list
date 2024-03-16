function List({ status, children }) {
  return (
    <ul className="list">
      <h2 className="list__title">{status}</h2>
      {children}
    </ul>
  );
}

export default List;