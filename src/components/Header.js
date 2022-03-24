
function Header({darkModeClick,mode}){
    return(
      <header>
        <h2>Shopster</h2>
        <button onClick={darkModeClick}>
        {mode ? "Dark": "Light"} Mode
        </button>
      </header>
    )
  }
  
  export default Header;