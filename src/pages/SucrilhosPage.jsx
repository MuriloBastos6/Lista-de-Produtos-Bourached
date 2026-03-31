
import { useEffect } from "react";
import "./Amendoim.css";

function SucrilhosPage(props) {
      useEffect(() => {
    document.body.classList.add("AmendoimPage");
    return () => {
      document.body.classList.remove("AmendoimPage");
    };
  }, []);

  return <div></div>;
}

export default SucrilhosPage;
