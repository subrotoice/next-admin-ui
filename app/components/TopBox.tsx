import { topDealUsers } from "../data";

const TopBox = () => {
  return (
    <div className="topBox">
      <h2 className="text-2xl mb-8">Top Deals</h2>
      {topDealUsers.map((user) => (
        <div
          className="singleUser flex justify-between mb-12 text-sm"
          key={user.id}
        >
          <div className="userDetails flex gap-4">
            <div className="userImg">
              <img
                src={user.img}
                alt={user.username}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div className="userText flex flex-col">
              <span className="userName text-sm font-medium">
                {user.username}
              </span>
              <span className="userEmail text-sm">{user.email}</span>
            </div>
          </div>
          <div className="amount">${user.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default TopBox;
