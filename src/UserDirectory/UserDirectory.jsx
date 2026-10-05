import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Loading from "./Loading";
import UserList from "./UserList/UserList";
import "./UserDirectory.css";

export default function UserDirectory() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setUsers(data.users || data);
      } catch (error) {
        console.error("Error while fetching:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // فلترة المستخدمين حسب نص البحث
  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="users-directory">
      <h1>User Directory</h1>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <p className="results-count">
            عرض {filteredUsers.length} من أصل {users.length} مستخدم
          </p>
          <UserList users={filteredUsers} />
        </>
      )}
    </div>
  );
}