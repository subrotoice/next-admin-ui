import Link from "next/link";
import { menu } from "../data";
import Image from "next/image";

const Menu = () => {
  return (
    <div className="menu flex flex-col">
      {menu.map((menuItem) => (
        <div className="item flex flex-col gap-4 mb-8" key={menuItem.id}>
          <span className="title font-thin uppercase text-xs hidden md:block">
            {menuItem.title}
          </span>
          {menuItem.listItems.map((submenuItem) => (
            <Link
              href={submenuItem.url}
              key={submenuItem.id}
              className="listItem flex items-center px-1 py-1 rounded-lg transition ease-in duration-300 hover:bg-soft-bg"
            >
              <Image
                width={20}
                height={20}
                src={submenuItem.icon}
                alt=""
                className="mr-2"
              />
              <span className="listItemTitle text-sm hidden md:block">
                {submenuItem.title}
              </span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
