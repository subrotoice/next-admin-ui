const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-between p-4 text-lg">
      <div className="logo flex items-center font-bold">
        <img src="logo.svg" alt="" className="mr-2" />
        React Admin
      </div>
      <div className="rightIcons flex items-center gap-4">
        <img src="search.svg" alt="" className="navbar__icon" />
        <img src="app.svg" alt="" className="navbar__icon" />
        <img src="expand.svg" alt="" className="navbar__icon" />
        <img src="search.svg" alt="" className="navbar__icon" />
        <div className="notification relative">
          <img src="notifications.svg" alt="" />
          <span className="absolute top-[-10px] right-[-10px] flex items-center justify-center bg-red-500 text-white rounded-full h-4 w-4 text-xs">
            1
          </span>
        </div>
        <div className="profileInfo flex items-center">
          <img
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="rounded-full h-[25px] w-[25px] object-cover mr-2"
          />
          <span>Subroto</span>
        </div>
        <img src="settings.svg" alt="" className="navbar__icon" />
      </div>
    </div>
  );
};

export default Navbar;
