import Link from "next/link";
import { menu } from "../data";

const Menu = () => {
  return (
    <div className="menu flex flex-col">
      {menu.map((menuItem) => (
        <div className="item flex flex-col gap-4 mb-8" key={menuItem.id}>
          <span className="title font-thin uppercase text-xs">
            {menuItem.title}
          </span>
          {menuItem.listItems.map((submenuItem) => (
            <Link
              href={submenuItem.url}
              key={submenuItem.id}
              className="listItem flex items-center px-1 py-1 rounded-lg transition ease-in duration-300 hover:bg-soft-bg"
            >
              <img src={submenuItem.icon} alt="" className="mr-2" />
              <span className="listItemTitle text-sm">{submenuItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
