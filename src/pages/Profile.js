import React from "react";
import { useState, useEffect } from "react";
import List from "../components/List";
import Link from '../components/Link';
import './Profile.css';

function Profile({ userName }) {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    async function fetchData() {
      const profile = await fetch(
        `https://api.github.com/users/${userName}`);
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
      field: 'html_url',
      value: <Link url={profile.html_url}
        title={profile.html_url} />,
    },
    {
      field: 'repos_url',
      value: <Link url={profile.repos_url}
        title={profile.repos_url} />,
    },
    // { field: 'name', value: profile.name },
    {field: 'location', value: profile.location }
  ];

  return (
    <div className="Profile-container">
      <h2>About me</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <h2>Hi, I’m Katy. I’m a developer with a background in teaching high school French. I’ve always had a passion for incorporating technology into my lessons as well as teaching others how to use technology to enhance their own lessons. I have a natural analytical ability to make things that are difficult to understand understood, whether it is verbally, on paper, or through an application. It seemed like a natural progression to learn a new language in coding and begin working on technology that can showcase my skills.  I’m looking forward to being a part of making technology more accessible and understandable for everyone.  </h2>
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