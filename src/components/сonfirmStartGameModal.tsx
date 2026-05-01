import { Button } from "./button";

interface IConfirmStartGameModal {
  user: { name: string };
  fnc?: () => void;
}

export const ConfirmStartGameModal = ({ user }: IConfirmStartGameModal) => {
  function handlePressYes() {}
  function handlePressNo() {}

  return (
    <div className="max-w-[80vw]">
      {/* Декоративный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue)] to-[var(--darkblue)] rounded-2xl blur-xl opacity-50"></div>

      {/* Основной контент */}
      <div className="relative bg-[var(--darkblue)]/80 backdrop-blur-sm rounded-2xl p-8 border border-[var(--lightblue)]">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* VS значок */}
          <div className="flex items-center gap-3">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--lightblue)] flex items-center justify-center mb-1">
                <span className="text-white text-sm">Вы</span>
              </div>
            </div>
            <span className="text-[var(--paleblue)] font-bold text-xl">VS</span>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--lightblue)] flex items-center justify-center mb-1">
                <span className="text-white text-sm">{user.name[0]}</span>
              </div>
            </div>
          </div>

          {/* Текст */}
          <p className="text-white text-center flex items-center justify-center flex-col">
            Начать игру против
            <span className="block text-[var(--paleblue)] text-xl font-bold mt-1 truncate max-w-[50vw]">
              {user.name}
            </span>
          </p>

          {/* Кнопки */}
          <div className="flex w-full gap-3 mt-2">
            <Button
              onClick={() => {
                handlePressYes();
              }}
              className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 transition-all"
            >
              <p className="text-white font-medium">Да</p>
            </Button>
            <Button
              onClick={() => {
                handlePressNo();
              }}
              className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-[var(--blue)] to-[var(--lightblue)] hover:from-[var(--lightblue)] hover:to-[var(--blue)] transition-all"
            >
              <p className="text-white font-medium">Нет</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
