const Navigation = () => {
    return (
<nav className="container">
        <div className="logo">
          <img src="images/brandlogo.svg" alt="logo"/>
        </div>
        <ul>
          <li><a href="#">Solutions</a></li>
          <li><a href="#">Research</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
        <input type="text" placeholder="Search..." />
      </nav>
    );
};
export default Navigation
