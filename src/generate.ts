// const __dirname = new URL(".", import.meta.url).pathname;

// import { CSSAttribute } from "./attributes.ts";

const globalValues = [`initial`, `inherit`, `revert`, `revert-layer`, `unset`];

const numericalRegex = `\\d+|auto|(?:\\d+px)||(?:\\d+em)|(?:\\d+%)`;

export const parseCSS = [
  /**
   * PADDING
   */
  {
    regex: new RegExp(`^p-(${numericalRegex}|${globalValues.join("|")})$`),
    output: (x: string) => {
      return [
        `padding: ${!x ? 0 : Number(x) ? `${x}rem` : `${x}`}`,
      ];
    },
  },
  /**
   * PADDING X
   */
  {
    regex: new RegExp(`^pl-(${numericalRegex}|${globalValues.join("|")})$`),
    output: (x: string) => {
      return [
        `padding-left: ${!x ? 0 : Number(x) ? `${x}rem` : `${x}`}`,
      ];
    },
  },
  {
    regex: new RegExp(`^pr-(${numericalRegex}|${globalValues.join("|")})$`),
    output: (x: string) => {
      return [
        `padding-right: ${!x ? 0 : Number(x) ? `${x}rem` : `${x}`}`,
      ];
    },
  },
  {
    regex: new RegExp(`^px-(${numericalRegex}|${globalValues.join("|")})$`),
    output: (x: string) => {
      return [
        `padding-left: ${!x ? 0 : Number(x) ? `${x}rem` : `${x}`}`,
        `padding-right: ${!x ? 0 : Number(x) ? `${x}rem` : `${x}`}`,
      ];
    },
  },
  /**
   * PADDING Y
   */
  {
    regex: new RegExp(`^pt-(${numericalRegex}|${globalValues.join("|")})$`),
    output: (x: string) => {
      return [
        `padding-top: ${!x ? 0 : Number(x) ? `${x}rem` : `${x}`}`,
      ];
    },
  },
  {
    regex: new RegExp(`^pb-(${numericalRegex}|${globalValues.join("|")})$`),
    output: (x: string) => {
      return [
        `padding-bottom: ${!x ? 0 : Number(x) ? `${x}rem` : `${x}`}`,
      ];
    },
  },
  {
    regex: new RegExp(`^py-(${numericalRegex}|${globalValues.join("|")})$`),
    output: (x: string) => {
      return [
        `padding-top: ${!x ? 0 : Number(x) ? `${x}rem` : `${x}`}`,
        `padding-bottom: ${!x ? 0 : Number(x) ? `${x}rem` : `${x}`}`,
      ];
    },
  },
  /**
   * MARGIN
   */
  {
    regex: new RegExp(`^m-(${numericalRegex}|${globalValues.join("|")})$`),
    output: (x: string) => {
      return [
        `margin: ${!x ? 0 : Number(x) ? `${x}rem` : `${x}`}`,
      ];
    },
  },
  /**
   * MARGIN X
   */
  {
    regex: new RegExp(`^ml-(${numericalRegex}|${globalValues.join("|")})$`),
    output: (x: string) => {
      return [
        `margin-left: ${!x ? 0 : Number(x) ? `${x}rem` : `${x}`}`,
      ];
    },
  },
  {
    regex: new RegExp(`^mr-(${numericalRegex}|${globalValues.join("|")})$`),
    output: (x: string) => {
      return [
        `margin-right: ${!x ? 0 : Number(x) ? `${x}rem` : `${x}`}`,
      ];
    },
  },
  {
    regex: new RegExp(`^mx-(${numericalRegex}|${globalValues.join("|")})$`),
    output: (x: string) => {
      return [
        `margin-left: ${!x ? 0 : Number(x) ? `${x}rem` : `${x}`}`,
        `margin-right: ${!x ? 0 : Number(x) ? `${x}rem` : `${x}`}`,
      ];
    },
  },
  /**
   * MARGIN Y
   */
  {
    regex: new RegExp(`^mt-(${numericalRegex}|${globalValues.join("|")})$`),
    output: (x: string) => {
      return [
        `margin-top: ${!x ? 0 : Number(x) ? `${x}rem` : `${x}`}`,
      ];
    },
  },
  {
    regex: new RegExp(`^mb-(${numericalRegex}|${globalValues.join("|")})$`),
    output: (x: string) => {
      return [
        `margin-bottom: ${!x ? 0 : Number(x) ? `${x}rem` : `${x}`}`,
      ];
    },
  },
  {
    regex: new RegExp(`^my-(${numericalRegex}|${globalValues.join("|")})$`),
    output: (x: string) => {
      return [
        `margin-top: ${!x ? 0 : Number(x) ? `${x}rem` : `${x}`}`,
        `margin-bottom: ${!x ? 0 : Number(x) ? `${x}rem` : `${x}`}`,
      ];
    },
  },
];


function determineLine(s: string) {
  if (s.toLowerCase() === "underline") return "underline";
  else if (s.toLowerCase() === "overline") return "overline";
  else if (s.toLowerCase() === "line-through") return "line-through";
  else return "none";
}

function toRGBAWithOpacity(s: string): string {
  const color = s.split("/");
  //  console.log(color)
  const col = toRGBA(color[0]);
  if (!Array.isArray(col)) return col;
  return `rgba(${col.join(", ")}, ${Number(color[1]) / 100})`;
}

function toRGBA(s: string): string | number[] {
  const color = parseColor(!isNaN(Number(s)) ? Number(s) : s);
  if (typeof color === "string") return color;
  return [(color >> 16) & 255, (color >> 8) & 255, color & 255];
}

function parseColor(color: string | number): string | number {
  if (!color) return Math.floor(Math.random() * (0xffffff + 1));
  if (typeof color === "string" && color.startsWith("#")) {
    color = parseInt(color.replace("#", ""), 16);
  } else if (Array.isArray(color)) {
    color = (color[0] << 16) + (color[1] << 8) + color[2];
  }

  if (color < 0 || color > 0xffffff) throw new RangeError("COLOR_RANGE");
  else if (Number.isNaN(color)) throw new TypeError("COLOR_CONVERT");

  return color;
}
