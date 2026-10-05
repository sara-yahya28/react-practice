export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <img
        className="user-avatar"
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
      />
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
    </div>
  );
}