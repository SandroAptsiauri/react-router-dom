import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { TUser } from "../type/user.type";

const Users: React.FC = () => {
  const users = useLoaderData() as TUser[];
  return (
    <div>
      {users.map(({ id, email }) => (
        <Link to={`/users/${id}`}>
          <h1>{email}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Users;

export const loader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
