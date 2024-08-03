// 'use client';
// // import React, { useState } from 'react';
// // import AllProducts from '../product/product';
// // import LoginPrueba from './LoginPrueba';
// // import Login from '../../components/Login/Login';



// // const FunctionPrueba: React.FC =  () => {
// //   const [token, setToken] = useState(localStorage.getItem('userToken') || null);

// //   return (
// //     <div className='w-full mt-20'>
// //       <p>jdsj</p>
// //       {token ? <AllProducts /> : <Login token={token} setToken={setToken} />}
// //     </div>
// //   );
// // };

// // export default FunctionPrueba;
// import React, { useState, useEffect } from 'react';

// import Login from '../../components/Login/Login';
// import AllProducts from '../product/product'; 

// const FunctionPrueba: React.FC = () => {
//   const [token, setToken] = useState<string | null>(null);

//   useEffect(() => {
//     // Accede a localStorage solo en el cliente
//     const userToken = localStorage.getItem('userToken');
//     setToken(userToken);
//   }, []);

//   return (
//     <div className='w-full mt-20'>
//       {token ? <p> <Login token={token} setToken={setToken} />  </p> : <p>No token found</p>}
//     </div>
//   );
// };

// export default FunctionPrueba;
// 'use client';

// import React, { useState, useEffect } from 'react';
// import Login from '../../components/Login/Login';
// import AllProducts from '../product/product'; 

// const FunctionPrueba: React.FC = () => {
//   const [token, setToken] = useState<string | null>(null);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       // Accede a localStorage solo en el cliente
//       const userToken = localStorage.getItem('userToken');
//       setToken(userToken);
//     }
//   }, []);

//   return (
//     <div className='w-full mt-20'>
//       {token ? <AllProducts /> : <Login token={token} setToken={setToken} />}
//     </div>
//   );
// };

// export default FunctionPrueba;
