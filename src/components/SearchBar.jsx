function Search ({ onSearch }) {
    return (
      <form className="search-form display-flex align-items-center" >
        <input className="search-input border-0 rounded p-1 me-2 w-100 align-self-stretch" type="search" name="search" id="search"
        aria-label="buscar"
        placeholder="Buscar..."
        onChange={(e) => onSearch(e.target.value)} />
      </form>
    );
}

export default Search;