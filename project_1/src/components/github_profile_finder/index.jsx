import { useEffect, useState } from "react";
import User from "./Profile";

export default function Githubprofile() {
  const [username, setusername] = useState("pankaj9599");
  const [userdata, setuserdata] = useState(null);
  const [loading, setloading] = useState(true);
  function handleclick() {
    fetchuserdata();
    setusername("");
  }
  async function fetchuserdata() {
      setloading(true);
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error("User not found or API error");
        }
        const data = await response.json();
        console.log(data)
        setuserdata(data);
      } catch (err) {

        setuserdata(null); // Reset userdata if there's an error
      } finally {
        setloading(false);
      }

    // const response = await fetch(`https://api.github.com/users/${username}`);
    // const data = await response.json();


    // // console.log(data);
    // if (data) {
    //   setuserdata(data);
    //   setloading(false);
    // }
  }

  useEffect(() => {
    fetchuserdata();
  }, []);
  if (loading)
    return (
      <div>
        <h1>...Loading data</h1>
      </div>
    );
  return (
    <div className="github_container">
      <div className="input_wrapper">
        <input
          name="search_by_username"
          type="text"
          placeholder="search profile"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <button onClick={handleclick}>search</button>
      </div>

      <div className="profile_container">
        {userdata !== null ? <User user={userdata} /> : null}
      </div>
    </div>
  );
}
