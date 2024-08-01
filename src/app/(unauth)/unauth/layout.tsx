// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div style={{ border: "1px solid #ccc", padding: "20px" }}>
//       <h2>Layout Header</h2>
//       {children}
//       <h2>Layout Footer</h2>
//     </div>
//   );
// }
// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex p-5 border border-gray-300">
//       <nav className="w-48 mr-5">
//         <h3 className="text-lg font-bold">Menu</h3>
//         <ul>
//           <li>
//             <a href="#home" className="text-blue-500 hover:underline">Home</a>
//           </li>
//           <li>
//             <a href="#about" className="text-blue-500 hover:underline">About</a>
//           </li>
//           <li>
//             <a href="#contact" className="text-blue-500 hover:underline">Contact</a>
//           </li>
//         </ul>
//       </nav>
//       <div className="flex-1">
//         <h2 className="text-xl font-semibold">Layout Header</h2>
//         {children}
//         <h2 className="text-xl font-semibold">Layout Footer</h2>
//       </div>
//     </div>
//   );
// }/ }

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", border: "1px solid #ccc", padding: "20px" }}>
      <nav style={{ width: "200px", marginRight: "20px" }}>
        <h3>Menu</h3>
        <ul>
          <li>
            <a href="/unauth/home" className="text-blue-300 hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/unauth/about" className="text-blue-300 hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/unauth/contact" className="text-blue-300 hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div style={{ flex: 1 }}>
        <h2>Layout Header</h2>
        {children}
        <h2>Layout Footer</h2>
      </div>
    </div>
  );
}
