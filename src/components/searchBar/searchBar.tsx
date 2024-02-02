function SearchBar({ onHandleSubmit }) {
  return (
    <>
      <div>
        <form onSubmit={onHandleSubmit}>
          <input name="name" type="text" />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
