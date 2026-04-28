import { Link } from "react-router-dom";
import burgerIcon from "../../assets/burger-icon.svg";
import profilePersonIcon from "../../assets/profile-person-icon.svg";
import { useBottomMenuStore } from "../../store/store";
import { Button } from "../button/button";
import { NavBottomCreateLobbyContainer } from "../navBottomCreateLobbyContainer";

export const BottomMenu = () => {
  const { isButtonActive, setIsOpen } = useBottomMenuStore();

  return (
    <div className="relative">
      <div className="flex justify-evenly items-center w-full h-[50px] fixed bottom-0 left-0 right-0 bg-[var(--blue)] z-20">
        <Link to="/" className={"w-[25px] h-[25px] focus:animate-pulse"}>
          <img src={burgerIcon} alt={burgerIcon} className="self-center" />
        </Link>

        <button
          onClick={() => !isButtonActive && setIsOpen()}
          className="flex justify-center h-[50px] w-[50px] rounded-[20px] translate-y-[-50%] bg-[var(--lightblue)]"
        >
          <p className="text-[var(--paleblue)] text-[30px] text-center">+</p>
        </button>

        <Link to="/" className={"w-[25px] h-[25px] focus:animate-pulse"}>
          <img
            src={profilePersonIcon}
            alt={profilePersonIcon}
            className="self-center"
          />
        </Link>
      </div>
      <NavBottomCreateLobbyContainer />
    </div>
  );
};
