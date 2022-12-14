// import { Link } from "react-router-dom"
// export default function Directory(props) {
//   const directory = [
//     {
//       img:
//         "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?b=1&s=170667a&w=0&k=20&c=96pCQon1xF3_onEkkckNg4cC9SCbshMvx0CfKl2ZiYs=",
//       name: "James King",
//       title: "President and CEO"
//     },
//     {
//       img:
//         "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=",
//       name: "Julie Taylor",
//       title: "VP of Marketing"
//     },
//     {
//       img:
//         "https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//       name: "Eugene Lee",
//       title: "CFO"
//     },
//     {
//       img:
//         "https://images.unsplash.com/photo-1620000617482-821324eb9a14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//       name: "John Williams",
//       title: "VP of Engineering"
//     },
//     {
//       img:
//         "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//       name: "Ray Moore",
//       title: "VP of Sales"
//     },
//     {
//       img:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//       name: "Paul Jones",
//       title: "QA Manager"
//     }

//   ];
//   return (
//     <div className="directory">
//       {
//         directory.map((employee) => {
//           const { img, name, title } = employee
//           // show route
//           return (
//             <Link to={"/"}>
//               <h2>{name}</h2>
//               <img src={img} alt="pic" />
//             </Link>
//           )

//         })
//       }
//     </div >
//   );
// };