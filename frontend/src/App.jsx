import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    const dataUser = async () => {
      const data = await axios.get("http://localhost:3001/users");
      setDataUsers(data.data.data);
    };

    dataUser();
  }, []);

  return (
    <>
      <div>
        <ul>
          {dataUsers.map((data) => {
            return (
              <div key={data._id}>
                <li>username: {data.username}</li>
                <li>email: {data.email}</li>
                <ul>
                  <li>favorit: {data.favorit[1]}</li>
                </ul>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
