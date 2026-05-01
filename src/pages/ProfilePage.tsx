export const ProfilePage = () => {
  // Пример данных пользователя
  const user = {
    name: "Игрок123",
    avatar: null,
    stats: {
      online: {
        wins: 42,
        losses: 18,
        draws: 5,
      },
      offline: {
        wins: 15,
        losses: 8,
        draws: 2,
      },
    },
  };

  const statsData = [
    {
      id: 1,
      icon: "🏆",
      label: "Победы",
      online: user.stats.online.wins,
      offline: user.stats.offline.wins,
    },
    {
      id: 2,
      icon: "💀",
      label: "Поражения",
      online: user.stats.online.losses,
      offline: user.stats.offline.losses,
    },
    {
      id: 3,
      icon: "🤝",
      label: "Ничья",
      online: user.stats.online.draws,
      offline: user.stats.offline.draws,
    },
  ];

  // Расчет процентов для прогресс-баров
  const onlineTotal =
    user.stats.online.wins + user.stats.online.losses + user.stats.online.draws;
  const offlineTotal =
    user.stats.offline.wins +
    user.stats.offline.losses +
    user.stats.offline.draws;

  const onlinePercentages = {
    wins: (user.stats.online.wins / onlineTotal) * 100 || 0,
    losses: (user.stats.online.losses / onlineTotal) * 100 || 0,
    draws: (user.stats.online.draws / onlineTotal) * 100 || 0,
  };

  const offlinePercentages = {
    wins: (user.stats.offline.wins / offlineTotal) * 100 || 0,
    losses: (user.stats.offline.losses / offlineTotal) * 100 || 0,
    draws: (user.stats.offline.draws / offlineTotal) * 100 || 0,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--darkblue)] to-[var(--blue)] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Карточка профиля */}
        <div className="bg-[var(--darkblue)]/50 backdrop-blur-sm rounded-2xl p-8 border border-[var(--lightblue)] shadow-2xl">
          {/* Аватар */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--paleblue)] to-[var(--lightblue)] p-1">
                <div className="w-full h-full rounded-full bg-[var(--darkblue)] flex items-center justify-center overflow-hidden">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-5xl">👤</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Никнейм */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">{user.name}</h2>
            <div className="inline-block px-3 py-1 rounded-full bg-[var(--lightblue)]/30 text-[var(--paleblue)] text-sm">
              Игрок
            </div>
          </div>

          {/* Таблица статистики */}
          <div className="overflow-hidden rounded-xl bg-[var(--blue)]/30 border border-[var(--lightblue)]">
            {/* Десктопная таблица (md и выше) */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--lightblue)] bg-[var(--darkblue)]/50">
                    <th className="py-4 px-6 text-left text-[var(--paleblue)] font-semibold text-sm uppercase tracking-wide">
                      Статистика
                    </th>
                    <th className="py-4 px-6 text-center text-[var(--paleblue)] font-semibold text-sm uppercase tracking-wide">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-green-400">●</span>
                        Онлайн
                      </div>
                    </th>
                    <th className="py-4 px-6 text-center text-[var(--paleblue)] font-semibold text-sm uppercase tracking-wide">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-gray-400">●</span>
                        Оффлайн
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {statsData.map((stat, index) => (
                    <tr
                      key={stat.id}
                      className={`border-b border-[var(--lightblue)]/50 hover:bg-[var(--lightblue)]/20 transition-colors ${
                        index === statsData.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{stat.icon}</span>
                          <span className="text-white font-medium">
                            {stat.label}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-2xl font-bold text-green-400">
                          {stat.online}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="text-2xl font-bold text-gray-400">
                          {stat.offline}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Планшетная версия (sm-md) */}
            <div className="hidden sm:block md:hidden overflow-x-auto">
              <table className="w-full min-w-[450px]">
                <thead>
                  <tr className="border-b border-[var(--lightblue)] bg-[var(--darkblue)]/50">
                    <th className="py-3 px-4 text-left text-[var(--paleblue)] font-semibold text-sm">
                      Статистика
                    </th>
                    <th className="py-3 px-4 text-center text-[var(--paleblue)] font-semibold text-sm">
                      <span className="text-green-400 mr-1">●</span>
                      Online
                    </th>
                    <th className="py-3 px-4 text-center text-[var(--paleblue)] font-semibold text-sm">
                      <span className="text-gray-400 mr-1">●</span>
                      Offline
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {statsData.map((stat, index) => (
                    <tr
                      key={stat.id}
                      className={`border-b border-[var(--lightblue)]/50 hover:bg-[var(--lightblue)]/20 ${
                        index === statsData.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{stat.icon}</span>
                          <span className="text-white">{stat.label}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="text-xl font-bold text-green-400">
                          {stat.online}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="text-xl font-bold text-gray-400">
                          {stat.offline}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Мобильная версия (карточки) */}
            <div className="sm:hidden">
              <div className="space-y-3 p-3">
                {statsData.map((stat) => (
                  <div
                    key={stat.id}
                    className="bg-[var(--darkblue)]/30 rounded-lg p-4 border border-[var(--lightblue)]"
                  >
                    <div className="flex items-center gap-3 mb-3 pb-2 border-b border-[var(--lightblue)]">
                      <span className="text-2xl">{stat.icon}</span>
                      <span className="text-white font-semibold">
                        {stat.label}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-green-400">●</span>
                          <span className="text-[var(--paleblue)]">Онлайн</span>
                        </div>
                        <span className="text-2xl font-bold text-green-400">
                          {stat.online}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400">●</span>
                          <span className="text-[var(--paleblue)]">
                            Оффлайн
                          </span>
                        </div>
                        <span className="text-2xl font-bold text-gray-400">
                          {stat.offline}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Прогресс бары - Онлайн режим */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-2xl">🎮</span>
                <h3 className="text-white font-semibold">Онлайн режим</h3>
              </div>
              <span className="text-[var(--paleblue)] text-sm">
                Всего игр: {onlineTotal}
              </span>
            </div>
            <div className="bg-[var(--blue)]/30 rounded-xl p-4 border border-[var(--lightblue)]">
              <div className="space-y-3">
                {/* Победы */}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-green-400">🏆 Победы</span>
                    <span className="text-white">
                      {user.stats.online.wins} (
                      {onlinePercentages.wins.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[var(--darkblue)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-green-400 transition-all duration-500"
                      style={{ width: `${onlinePercentages.wins}%` }}
                    />
                  </div>
                </div>

                {/* Поражения */}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-red-400">💀 Поражения</span>
                    <span className="text-white">
                      {user.stats.online.losses} (
                      {onlinePercentages.losses.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[var(--darkblue)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-red-400 transition-all duration-500"
                      style={{ width: `${onlinePercentages.losses}%` }}
                    />
                  </div>
                </div>

                {/* Ничьи */}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-yellow-400">🤝 Ничья</span>
                    <span className="text-white">
                      {user.stats.online.draws} (
                      {onlinePercentages.draws.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[var(--darkblue)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-yellow-400 transition-all duration-500"
                      style={{ width: `${onlinePercentages.draws}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Прогресс бары - Оффлайн режим */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-2xl">💻</span>
                <h3 className="text-white font-semibold">Оффлайн режим</h3>
              </div>
              <span className="text-[var(--paleblue)] text-sm">
                Всего игр: {offlineTotal}
              </span>
            </div>
            <div className="bg-[var(--blue)]/30 rounded-xl p-4 border border-[var(--lightblue)]">
              <div className="space-y-3">
                {/* Победы */}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-green-400">🏆 Победы</span>
                    <span className="text-white">
                      {user.stats.offline.wins} (
                      {offlinePercentages.wins.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[var(--darkblue)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-green-400 transition-all duration-500"
                      style={{ width: `${offlinePercentages.wins}%` }}
                    />
                  </div>
                </div>

                {/* Поражения */}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-red-400">💀 Поражения</span>
                    <span className="text-white">
                      {user.stats.offline.losses} (
                      {offlinePercentages.losses.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[var(--darkblue)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-red-400 transition-all duration-500"
                      style={{ width: `${offlinePercentages.losses}%` }}
                    />
                  </div>
                </div>

                {/* Ничьи */}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-yellow-400">🤝 Ничья</span>
                    <span className="text-white">
                      {user.stats.offline.draws} (
                      {offlinePercentages.draws.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[var(--darkblue)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-yellow-400 transition-all duration-500"
                      style={{ width: `${offlinePercentages.draws}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Итоговая статистика */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-[var(--blue)]/30 rounded-lg p-4 text-center border border-[var(--lightblue)]">
              <div className="text-[var(--paleblue)] text-xs uppercase tracking-wide mb-2">
                Win Rate (Онлайн)
              </div>
              <div className="text-green-400 text-2xl font-bold">
                {(
                  (user.stats.online.wins /
                    (user.stats.online.wins + user.stats.online.losses)) *
                    100 || 0
                ).toFixed(1)}
                %
              </div>
            </div>
            <div className="bg-[var(--blue)]/30 rounded-lg p-4 text-center border border-[var(--lightblue)]">
              <div className="text-[var(--paleblue)] text-xs uppercase tracking-wide mb-2">
                Win Rate (Оффлайн)
              </div>
              <div className="text-green-400 text-2xl font-bold">
                {(
                  (user.stats.offline.wins /
                    (user.stats.offline.wins + user.stats.offline.losses)) *
                    100 || 0
                ).toFixed(1)}
                %
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
