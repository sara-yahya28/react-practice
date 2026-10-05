import UserCard from "./UserCard";

export default function UserList({ users }) {
  return (
    
    // adding userCard to each user
    <div className="users-grid">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}