import { useEffect } from "react";
import "./Amendoim.css";

function ChaPage(props) {
      useEffect(() => {
    document.body.classList.add("AmendoimPage");
    return () => {
      document.body.classList.remove("AmendoimPage");
    };
  }, []);
  return <div></div>;
}

export default ChaPage;
