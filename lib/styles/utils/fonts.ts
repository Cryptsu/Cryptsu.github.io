import {
  JetBrains_Mono as JetBrainsMonoLoader
} from "next/font/google";

export const JetBrainsMono = JetBrainsMonoLoader({
  weight: "variable",
  display: "swap",
  preload: false,
  subsets: ["latin", "vietnamese"],
  style: ["italic", "normal"]
});