import { useState, useEffect } from "react";
import "./UseEffect.css";

const UseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // async/await
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await result.json();
      console.log(users);
      setUsers(users);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>STUDENT  ID CARD</h1>
      
      <div className="cards-holder">
        {users.map((user, i) => (
          <div className="cards" key={i}>
            <div className="card-name">
              <h5>
                <strong>Name:</strong> {user.name}
              </h5>
            </div>
            <div className="card-btn">
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Phone Number:</strong> {user.phone}
              </p>
              <p>
                <strong>Website:</strong> {user.website}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseEffect;
