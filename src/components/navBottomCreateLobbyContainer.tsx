import { useBottomMenuStore } from "../store/store";
import { Button } from "./button";
import crossIcon from "../assets/cross.svg";
import { useState } from "react";

export const NavBottomCreateLobbyContainer = () => {
  const [lobbyName, setLobbyName] = useState("");
  const [lobbyNameError, setLobbyNameError] = useState<string>("");
  const { isButtonActive, setIsClose } = useBottomMenuStore();
  const [gameMode, setGameMode] = useState<"singleDevice" | "oneVsOne">(
    "oneVsOne",
  );
  const [accessLevel, setAccessLevel] = useState<
    "public" | "friends" | "special" | "onlyMe" //"public" - публичный | "friends" - только для друзей | "special" - при приглосе вручную | "onlyMe" - при создании игры на 1 устройстве
  >("public");
  const [canComeIcSpectators, setCanComeIcSpectators] = useState(true);

  const handleCloseCreateLobbyContainer = () => {
    setAccessLevel("public");
    setGameMode("oneVsOne");
    setLobbyName("");
    setLobbyNameError("");
    setCanComeIcSpectators(true);
    setIsClose();
  };

  const handleChangeGameMode = () => {
    if (gameMode === "oneVsOne") {
      setGameMode("singleDevice");
      setAccessLevel("onlyMe");
      setCanComeIcSpectators(false);
    } else {
      setGameMode("oneVsOne");
      setAccessLevel("public");
      setCanComeIcSpectators(true);
    }
  };
  const handleChangeAccessLevel = () => {
    if (accessLevel === "onlyMe") return;
    if (accessLevel === "public") {
      setAccessLevel("friends");
    } else {
      setAccessLevel("public");
    }
  };
  const handleChangeAccessSpectators = () => {
    setCanComeIcSpectators((state) => !state);
  };
  const handleCreateLobby = () => {
    if (lobbyName === "") {
      setLobbyNameError("Поле должно быть заполнено");
      console.log(lobbyName, lobbyName === "");
      return;
    } else {
      const lobbySettings = {
        name: lobbyName,
        gameMode: gameMode,
        accessLevel: accessLevel,
        spectateMode: canComeIcSpectators,
      };
      console.log(lobbySettings);
    }
  };
  return (
    <>
      <div
        onClick={() => isButtonActive && handleCloseCreateLobbyContainer()}
        className={`z-25 abolsute duration-[0.5s] ${isButtonActive ? "translate-y-[-95vh]" : "translate-y-[-120vh]"} h-[25vh] bg-[#00000054]`}
      />
      <div
        className={`z-25 absolute duration-[0.5s] flex flex-col h-[80vh] w-full bottom-0 rounded-t-3xl ${
          isButtonActive ? "translate-y-[-20vh]" : "translate-y-[65vh]"
        } bg-[var(--blue)] shadow-2xl`}
      >
        <Button
          onClick={() => isButtonActive && handleCloseCreateLobbyContainer()}
          className={
            "ml-auto mt-[15px] mr-[15px] mb-[15px] w-[30px] h-[30px] hover:opacity-70 duration-200"
          }
        >
          <img src={crossIcon} alt="Закрыть" className="w-full h-full" />
        </Button>

        <div className="flex flex-col justify-between h-full px-6 pb-6 gap-4">
          {/* Поле ввода названия лобби */}
          <div className="relative">
            <input
              type="text"
              value={lobbyName}
              onChange={(e) => {
                setLobbyName(e.target.value);
                if (lobbyNameError !== "") setLobbyNameError("");
              }}
              placeholder="Название лобби"
              className="w-full px-5 py-3 rounded-xl bg-[var(--darkblue)] text-[var(--paleblue)] placeholder:text-[var(--paleblue)] placeholder:opacity-60 text-center outline-none focus:ring-2 focus:ring-[var(--paleblue)] transition-all duration-200"
              maxLength={30}
            />
          </div>

          {/* Ошибка */}
          {lobbyNameError && (
            <p className="text-[var(--red)] text-center text-sm animate-pulse">
              {lobbyNameError}
            </p>
          )}

          {/* Кнопка выбора режима игры */}
          <button
            onClick={() => handleChangeGameMode()}
            className="w-full px-5 py-3 rounded-xl bg-[var(--darkblue)] text-[var(--paleblue)] font-medium hover:bg-opacity-80 active:scale-95 transition-all duration-200 shadow-md"
          >
            {gameMode === "oneVsOne" ? (
              <p className="flex items-center justify-center gap-2">
                <span>⚔️</span> 1 на 1 <span>🌐</span>
              </p>
            ) : (
              <p className="flex items-center justify-center gap-2">
                <span>📱</span> На одном устройстве <span>🔄</span>
              </p>
            )}
          </button>

          {/* Настройки доступа */}
          {accessLevel !== "onlyMe" && (
            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleChangeAccessLevel()}
                className="px-5 py-3 rounded-xl bg-[var(--darkblue)] text-[var(--paleblue)] capitalize hover:bg-opacity-80 active:scale-95 transition-all duration-200"
              >
                {accessLevel === "public" && "🌍 Публичный"}
                {accessLevel === "friends" && "👥 Только друзья"}
              </button>

              <button
                onClick={() => handleChangeAccessSpectators()}
                className="px-5 py-3 rounded-xl bg-[var(--darkblue)] text-[var(--paleblue)] hover:bg-opacity-80 active:scale-95 transition-all duration-200"
              >
                <p className="flex items-center justify-center gap-2">
                  <span>👀</span>
                  Наблюдатели -{" "}
                  {canComeIcSpectators
                    ? "✅ могут смотреть"
                    : "❌ не могут смотреть"}
                </p>
              </button>
            </div>
          )}

          {/* Кнопка создания */}
          <button
            className="mt-auto w-full bg-[var(--darkblue)] rounded-2xl duration-200 hover:opacity-80 active:scale-95 shadow-lg overflow-hidden group"
            onClick={() => {
              handleCreateLobby();
            }}
          >
            <p className="text-[var(--paleblue)] py-4 font-bold text-lg group-hover:scale-105 transition-transform duration-200">
              {accessLevel === "onlyMe"
                ? "🎮 Создать игру"
                : "🚀 Создать лобби"}
            </p>
          </button>
        </div>
      </div>
    </>
  );
};
