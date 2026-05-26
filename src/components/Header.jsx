function Header({ name, title }) {
  return (
    <div className="hero-header">
      <h1 className="hero-name">{name}</h1>
      <p className="hero-title">{title}</p>
    </div>
  );
}

export default Header;
