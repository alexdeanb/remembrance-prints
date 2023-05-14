import { CustomerViews } from "./CustomerViews";
import { DesignerViews } from "./DesignerViews";

export const ApplicationViews = () => {
  const localPrintsUser = localStorage.getItem("prints_user");
  const printsUserObject = JSON.parse(localPrintsUser);

  if (printsUserObject.designer) {
    return <DesignerViews />;
  } else {
    return <CustomerViews />;
  }
};
