import {
  JetBrains_Mono as JetBrainsMonoLoader
} from "next/font/google";

export const JetBrainsMono = JetBrainsMonoLoader({
  weight: "variable",
  display: "fallback",
  preload: true,
  subsets: ["latin", "vietnamese"],
});