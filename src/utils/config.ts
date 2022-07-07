import { AquaCSSGenerator } from "../css.ts";

export type AquaCSSConfigItem = Record<string, Record<string, string> | string>;

export interface AquaCSSConfig {
  colors: AquaCSSConfigItem;
}

export const defaultAquaCSSConfig = {
  colors: {
    purple: {
      100: "#f4edff",
      200: "#e9dbff",
      300: "#dec9ff",
      400: "#d4b7ff",
      500: "#c9a6ff",
      600: "#be94ff",
      700: "#b482ff",
      800: "#a970ff",
      900: "#9e5eff",
      1000: "#944dff",
      1100: "#8545e5",
      1200: "#763dcc",
      1300: "#6735b2",
      1400: "#582e99",
      1500: "#4a267f",
      1600: "#3b1e66",
      1700: "#2c174c",
      1800: "#1d0f33",
      1900: "#0e0719",
    },
  },
};

export function defineAquaCSSConfig(config: Partial<AquaCSSConfig>) {
  return new AquaCSSGenerator(Object.assign(defaultAquaCSSConfig, config));
}
