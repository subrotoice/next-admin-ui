interface User {
  id: number;
  name: string;
}

const FolderName = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  console.log(users);
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default FolderName;
