import { type ReactNode } from "react";
import { BottomMenu } from "./components/bottomMenu/bottomMenu";
import { NavBottomCreateLobbyContainer } from "./components/navBottomCreateLobbyContainer";

interface ILayout {
  children: ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <div
      style={{
        height: "100vh",
        overflowY: "hidden",
        position: "relative",
        paddingBottom: "50px",
      }}
    >
      <div className="h-full w-full overflow-y-auto pb-[35px]">{children}</div>

      <BottomMenu />
    </div>
  );
};
