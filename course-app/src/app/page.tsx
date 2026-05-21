"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    fetch("http://localhost:1803/user")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setUsername(res[0].username);
        setUsers(res);
      });
  }, []);

  const submitCreateUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const payload = {
      username: form.username,
      password: form.password,
    };

    console.log("payload", payload);

    fetch("http://localhost:1803/auth/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: "100vh",
      }}
    >
      <h1>{username}</h1>
      <form
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          onChange={(event) =>
            setForm((prev) => ({ ...prev, username: event.target.value }))
          }
          placeholder="Điền username"
          type="username"
        />
        <input
          onChange={(event) =>
            setForm((prev) => ({ ...prev, password: event.target.value }))
          }
          placeholder="Điền password"
          type="password"
        />
        <button onClick={(event) => submitCreateUser(event)}>Create</button>
      </form>

      <h2>Danh sach user</h2>
      <ul>
        {users.map((user, index) => {
          return <li key={index}>{user["username"]}</li>;
        })}
      </ul>
    </div>
  );
}
