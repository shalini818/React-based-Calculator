import * as React from 'react';
// import './style.css';

// export default function App() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
// }

import "./style.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Output from "./components/Output";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <Footer />
    </div>
  );
}
