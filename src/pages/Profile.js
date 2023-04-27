import React from "react";
import { useState, useEffect } from "react";
import List from "../components/List";
import Link from "../components/Link";
import profilePic from "../assets/profileImg.jpeg";
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
      <h2>About me</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <p>
            Hi, I’m Katy. I've always had an interest in technology but never
            thought I could actually code myself until I suddenly found myself
            teaching online. I was a French teacher, and due to the global
            pandemic, I suddenly had to figure out the best way to keep my
            students interested through a screen. Our district used the LMS
            Canvas, which has a lot of simple things to do, but to make it even
            better, it allows you to go into the code. I started playing with
            that, learning some simple HTML, and realized that there were a lot
            of similarities between learning that and learning a foreign
            language. Suddenly, coding seemed so completely doable! I enrolled
            in an online bootcamp with CareerFoundry and the rest is history!
          </p>
          <p>
            I have a natural analytical ability to make things that are
            difficult to understand understood, whether it is verbally, on
            paper, or through an application. That served me well as a high
            school teacher and serves me well now as a programmer. I enjoy
            making technology more accessible and understandable for everyone.
          </p>
          <img
            className="Profile-avatar"
            // src={profile.avatar_url}
            src={profilePic}
            alt={profile.name}
          />
          <List items={items} />
        </div>
      )}
    </div>
  );
}

export default Profile;
