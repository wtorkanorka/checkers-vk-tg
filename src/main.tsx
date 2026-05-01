import "./global.css";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";

import { init, miniApp, mainButton, shareURL } from "@telegram-apps/sdk";

const initializeTelegramSDK = async () => {
  try {
    await init();

    if (miniApp.ready.isAvailable()) {
      await miniApp.ready();
      console.log("Mini App готово");
    }
  } catch (error) {
    console.error("Ошибка инициализации:", error);
  }
};

initializeTelegramSDK();
miniApp.setHeaderColor("var(--paleblue)");
createRoot(document.getElementById("root")!).render(<App />);
