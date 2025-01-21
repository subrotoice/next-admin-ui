import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-between p-4 text-lg">
      <div className="logo flex items-center font-bold">
        <Image src="logo.svg" alt="" className="mr-2" width={25} height={25} />
        React Admin
      </div>
      <div className="rightIcons flex items-center gap-4">
        <Image
          width={20}
          height={20}
          src="search.svg"
          alt=""
          className="hidden md:block"
        />
        <Image
          width={20}
          height={20}
          src="app.svg"
          alt=""
          className="hidden md:block"
        />
        <Image
          width={20}
          height={20}
          src="expand.svg"
          alt=""
          className="hidden md:block"
        />
        <Image
          width={20}
          height={20}
          src="search.svg"
          alt=""
          className="hidden md:block"
        />
        <div className="notification relative">
          <Image src="notifications.svg" alt="" width={25} height={25} />
          <span className="absolute top-[-10px] right-[-10px] flex items-center justify-center bg-red-500 text-white rounded-full h-4 w-4 text-xs">
            1
          </span>
        </div>
        <div className="profileInfo flex items-center">
          <Image
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={25}
            height={25}
            className="rounded-full h-[25px] w-[25px] object-cover mr-2"
          />
          <span>Subroto</span>
        </div>
        <Image
          width={25}
          height={25}
          src="settings.svg"
          alt=""
          className="navbar__icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
