
import { useEffect } from "react";
import "./Amendoim.css";

function SalgadinhosPage(props) {
  useEffect(() => {
    document.body.classList.add("AmendoimPage");
    return () => {
      document.body.classList.remove("AmendoimPage");
    };
  }, []);

  return <div></div>;
}

export default SalgadinhosPage;
