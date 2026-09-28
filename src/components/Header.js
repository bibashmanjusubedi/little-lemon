import logo from '../assets/Logo .svg' // adjust filename/path as needed

function Header() {
  return (
    <header>
      {/* Header content / branding */}
      <h1>Little Lemon</h1>
      <img src={logo} alt="Little Lemon Logo" />
    </header>
  );
}

export default Header;