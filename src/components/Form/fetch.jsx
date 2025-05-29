import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchingData() {
  const [users, setUsers] = useState([]);

  const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")   //requst bhjtta hy API ko get() function
      .then((res) => console.log(res))      //then()jab data sucessfully mill jatat hy tab ya code chaltta hy
      .catch((err) => console.log(err));       //catch()error handle karna
  };

  useEffect(() => {        //react ka hook hy useEffect()
    getData();
  }, []); //means[] just one time

  return (
    <div>
      
    </div>
  );
}

export default FetchingData;





// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function FetchingData() {
//   const [users, setUsers] = useState([]);

//   const getData = () => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         console.log(res.data); // 🔍 Check Console
//         setUsers(res.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div>
//       <h1>Users List</h1>

//       {users.length > 0 ? (
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>
//               <strong>{user.name}</strong> - {user.email}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading users...</p> // 👈 Show message until data loads
//       )}
//     </div>
//   );
// }

// export default FetchingData;
