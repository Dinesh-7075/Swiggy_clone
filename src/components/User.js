import { useState, useEffect } from "react";
import index from "../../index.css";

const User = (props) => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const gitUserUrl = "https://api.github.com/users/Dinesh-7075";
    const res = await fetch(gitUserUrl);
    const jsonData = await res.json();
    setUser(jsonData);
  };

  useEffect(() => {
    getUser();
    console.log(user);
  }, []);

  if (user != null) {
    const { name, location, avatar_url } = user;
    const { GitHub, mobileNum } = props;
    return (
      <div className="userCard w-[500px] m-auto mt-5 p-3 flex justify-center content-center flex-col  text-black shadow-lg">
        <img
          src={avatar_url}
          className="w-[100px] h-[100px] border rounded-full m-auto"
        />
        <h2 className="m-auto mt-1.5 text-lg">Name: {name}</h2>
        <h3 className="m-auto mt-1.5 text-lg">Location: {location}</h3>
        <h4 className="m-auto mt-1.5 text-lg">
          GitHub:{" "}
          <a href={GitHub} target="_blank" className="text-blue-400">
            {GitHub}
          </a>
        </h4>
        <h5 className="m-auto mt-1.5 text-lg">Mobile Number: {mobileNum}</h5>
      </div>
    );
  }
};

export default User;
