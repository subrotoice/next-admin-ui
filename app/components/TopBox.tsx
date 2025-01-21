import Image from "next/image";
import { topDealUsers } from "../data";

const TopBox = () => {
  return (
    <div className="topBox">
      <h2 className="text-2xl mb-8">Top Deals</h2>
      {topDealUsers.map((user) => (
        <div
          className="singleUser flex justify-between mb-8 text-sm"
          key={user.id}
        >
          <div className="userDetails flex gap-4">
            <div className="userImg">
              <Image
                width={100}
                height={150}
                src={user.img}
                alt={user.username}
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
            <div className="userText flex flex-col text-xs">
              <span className="userName font-semibold">{user.username}</span>
              <span className="userEmail">{user.email}</span>
            </div>
          </div>
          <div className="amount">${user.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default TopBox;
