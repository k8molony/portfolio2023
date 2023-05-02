import React from "react";
import { useState, useEffect } from "react";
import List from "../components/List";
import Link from "../components/Link";
import "./Profile.css";

function Profile({ userName }) {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    async function fetchData() {
      const profile = await fetch(`https://api.github.com/users/${userName}`);
      const result = await profile.json();
      if (result) {
        setProfile(result);
        setLoading(false);
      }
    }
    fetchData();
  }, [userName]);

  const items = [
    {
      field: "GitHub",
      value: <Link url={profile.html_url} title={profile.html_url} />,
    },
    {
      field: "Repos",
      value: <Link url={profile.repos_url} title={profile.repos_url} />,
    },
    // { field: 'name', value: profile.name },
    { field: "Location", value: profile.location },
  ];

  return (
    <div className="Profile-container">
      <h2>10 Facts About Me</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <ol>
            <li>I like cheese </li>
            <li>I like cats </li>
          </ol>
          <img
            className="Profile-avatar"
            src={profile.avatar_url}
            alt={profile.name}
          />
          <List items={items} />
        </div>
      )}
    </div>
  );
}

export default Profile;
