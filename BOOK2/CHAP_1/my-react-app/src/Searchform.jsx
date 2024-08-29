function Searchform() {
  return (
    <form>
      <label htmlFor="searchterm">
        Search For:
        <input type="text" id="searcTerm"></input>
      </label>
      <button>Search</button>
    </form>
  );
}

export default Searchform;
