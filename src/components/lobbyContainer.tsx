interface ILobbyContainer {
  index: number;
  lobbyName: string;
  playerRating: number;
  profileImg: string;
}

export const LobbyContainer = ({
  index,
  lobbyName,
  playerRating,
  profileImg,
}: ILobbyContainer) => {
  return (
    <div className="grid grid-cols-12 gap-2 px-4 py-3 hover:bg-[var(--blue)] active:scale-95  transition-all cursor-pointer group border-b border-[var(--blue)] last:border-b-0">
      {/* Номер */}
      <div className="col-span-1 flex items-center justify-center">
        <p className="text-[var(--paleblue)] font-mono text-sm font-bold">
          #{index + 1}
        </p>
      </div>

      {/* Название лобби */}
      <div className="col-span-6 flex items-center">
        <p className="text-[var(--paleblue)] font-medium truncate group-hover:translate-x-1 transition-transform">
          {lobbyName}
        </p>
      </div>

      {/* Рейтинг */}
      <div className="col-span-3 flex items-center justify-center">
        <div className="flex items-center gap-1 bg-[var(--darkblue)] px-2 py-1 rounded-full">
          <span className="text-yellow-400 text-xs">⭐</span>
          <p className="text-[var(--paleblue)] font-semibold text-sm">
            {playerRating}
          </p>
        </div>
      </div>

      {/* Аватар */}
      <div className="col-span-2 flex items-center justify-center">
        <div className="w-[35px] h-[35px] bg-gradient-to-br from-[var(--blue)] to-[var(--darkblue)] rounded-full overflow-hidden shadow-md">
          {profileImg ? (
            <img
              src={profileImg}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[var(--paleblue)] text-xs font-bold">
                👤
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
