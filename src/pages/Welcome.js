import React from "react";
import { useState, useEffect } from "react";
// import List from "../components/List";
// import Link from "../components/Link";
import "./Welcome.css";

function Welcome() {
  const [loading, setLoading] = useState(false);
  const [welcome, setWelcome] = useState({});

  useEffect(() => {
    setWelcome(welcome);
    setLoading(false);
    console.log();
  }, [welcome]);

  return (
    <div className="Profile-container">
      <h2>Welcome</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          {/* <img
            className="Profile-avatar"
            src={profile.avatar_url}
            alt={profile.name}
          /> */}
        </div>
      )}
    </div>
  );
}

export default Welcome;
