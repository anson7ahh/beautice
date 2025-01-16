// "use client";
// import api from "@/components/Axios";
// import { useState, useEffect } from "react";
// // Đảm bảo đường dẫn đúng
// interface User {
//   id: number;
//   name: string;
// }
// const ExampleComponent = () => {
//   const [data, setData] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await api.get("/users");
//         setData(response.data);
//       } catch (err) {
//         console.log(err);
//         setError("Failed to fetch data");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>Users List</h1>
//       <ul>
//         {data.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ExampleComponent;
