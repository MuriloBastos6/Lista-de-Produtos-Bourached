
import { useEffect } from "react";
import "./Amendoim.css";

function RefrisPage(props) {

  useEffect(() => {
    document.body.classList.add("AmendoimPage");
    return () => {
      document.body.classList.remove("AmendoimPage");
    };
  }, []);
  return <div></div>;
}

export default RefrisPage;
