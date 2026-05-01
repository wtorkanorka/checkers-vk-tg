import { LobbyContainer } from "../components/lobbyContainer";

export const LobbyListPage = () => {
  const mockData = [
    {
      lobbyName: "лобби 1",
      playerRating: 253,
      profileImg: "",
      user: { name: "имя 11111111111111111111111111111111111" },
    },
    {
      lobbyName: "лобби 2",
      playerRating: 253,
      profileImg: "",
      user: { name: "имя 2222222222222222222222222222222222222" },
    },
    {
      lobbyName: "Ночной дозор",
      playerRating: 1842,
      profileImg: "",
      user: { name: "имя 33333333333333333333333333333333333" },
    },
    {
      lobbyName: "Киберспортсмены",
      playerRating: 3100,
      profileImg: "",
      user: { name: "имя 4" },
    },
    {
      lobbyName: "Уютный вечер",
      playerRating: 890,
      profileImg: "",
      user: { name: "имя 5" },
    },
    {
      lobbyName: "Хардкорщики",
      playerRating: 2750,
      profileImg: "",
      user: { name: "имя 6" },
    },
  ];

  return (
    <div className="w-full bg-[var(--lightblue)] rounded-xl overflow-hidden shadow-lg">
      {/* Заголовки таблицы */}
      <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-[var(--darkblue)] border-b border-[var(--blue)]">
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-[var(--paleblue)] font-bold text-sm">№</p>
        </div>
        <div className="col-span-6 flex items-center">
          <p className="text-[var(--paleblue)] font-bold text-sm">
            Название игры
          </p>
        </div>
        <div className="col-span-3 flex items-center justify-center">
          <p className="text-[var(--paleblue)] font-bold text-sm">Рейтинг</p>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <p className="text-[var(--paleblue)] font-bold text-sm">Игрок</p>
        </div>
      </div>

      {/* Список лобби */}
      <div className="divide-y divide-[var(--blue)]">
        {mockData.map((lobby, index) => (
          <LobbyContainer
            key={index}
            index={index}
            lobbyName={lobby.lobbyName}
            playerRating={lobby.playerRating}
            profileImg={lobby.profileImg}
            user={lobby.user}
          />
        ))}
        {mockData.map((lobby, index) => (
          <LobbyContainer
            key={index}
            index={index}
            lobbyName={lobby.lobbyName}
            playerRating={lobby.playerRating}
            profileImg={lobby.profileImg}
            user={lobby.user}
          />
        ))}
        {mockData.map((lobby, index) => (
          <LobbyContainer
            key={index}
            index={index}
            lobbyName={lobby.lobbyName}
            playerRating={lobby.playerRating}
            profileImg={lobby.profileImg}
            user={lobby.user}
          />
        ))}
        {mockData.map((lobby, index) => (
          <LobbyContainer
            key={index}
            index={index}
            lobbyName={lobby.lobbyName}
            playerRating={lobby.playerRating}
            profileImg={lobby.profileImg}
            user={lobby.user}
          />
        ))}
      </div>
    </div>
  );
};
