import { CustomerNav } from "./CustomerNav";
import { DesignerNav } from "./DesignerNav";

export const NavBar = ({ colorMode, setColorMode }) => {
  const localPrintsUser = localStorage.getItem("prints_user");
  const printsUserObject = JSON.parse(localPrintsUser);

  if (printsUserObject.designer) {
    return <DesignerNav colorMode={colorMode} setColorMode={setColorMode} />;
  } else {
    return <CustomerNav colorMode={colorMode} setColorMode={setColorMode} />;
  }
};
