import { CSSAttribute } from "./attributes.ts";


export const parseCSS: {
  name: CSSAttribute[];
  regex: RegExp;
  output: (x: string) => string;
}[] = [
  /**
   * PADDING
   */
  {
    name: ["padding"],
    regex: /^p-(.+)/,
    output: (x) => `${x}rem`,
  },
  {
    name: ["padding-left"],
    regex: /^pl-(.+)/,
    output: (x) => `${x}rem`,
  },
  {
    name: ["padding-right"],
    regex: /^pr-(.+)/,
    output: (x) => `${x}rem`,
  },
  {
    name: ["padding-left", "padding-right"],
    regex: /^px-(.+)/,
    output: (x) => `${x}rem`,
  },
  {
    name: ["padding-top"],
    regex: /^pt-(.+)/,
    output: (x) => `${x}rem`,
  },
  {
    name: ["padding-bottom"],
    regex: /^pb-(.+)/,
    output: (x) => `${x}rem`,
  },
  {
    name: ["padding-top", "padding-bottom"],
    regex: /^py-(.+)/,
    output: (x) => `${x}rem`,
  },
  /**
   * MARGIN
   */
  {
    name: ["margin"],
    regex: /^m-(.+)/,
    output: (x) => x,
  },
  {
    name: ["margin-left"],
    regex: /^ml-(.+)/,
    output: (x) => x,
  },
  {
    name: ["margin-right"],
    regex: /^mr-(.+)/,
    output: (x) => x,
  },
  {
    name: ["margin-left", "margin-right"],
    regex: /^mx-(.+)/,
    output: (x) => x,
  },
  {
    name: ["margin-top"],
    regex: /^mt-(.+)/,
    output: (x) => x,
  },
  {
    name: ["margin-bottom"],
    regex: /^mb-(.+)/,
    output: (x) => x,
  },
  {
    name: ["margin-top", "margin-bottom"],
    regex: /^my-(.+)/,
    output: (x) => x,
  },
  /**
   * TEXT COLOR
   */
  {
    name: ["color"],
    regex: /^text-(.+)/,
    output: (x) => toRGBAWithOpacity(`${x}/100`),
  },
  /**
   * BACKGROUND COLOR
   */
  {
    name: ["background-color"],
    regex: /^^bg-(.+)/,
    output: (x) => toRGBAWithOpacity(`${x}/100`),
  },
  /**
   * FONT SIZE
   */
  {
    name: ["font-size"],
    regex: /^^size-(.+)/,
    output: (x) => x,
  },
  /**
   * FONT WEIGHT
   */
  {
    name: ["font-weight"],
    regex: /^weight-(\d+)/,
    output: (x) => x,
  },
  /**
   * TEXT ALIGN
   */
   {
    name: ["text-align"],
    regex: /^align-(\d+)/,
    output: (x) => x,
  },
  /**
   * TEXT DECORATION
   */
   {
    name: ["text-decoration-line"],
    regex: /^decorate-(\w+)/,
    output: (x) => determineLine(x),
  },
  {
    name: ["text-decoration-color"],
    regex: /^decorate-color-(.+)/,
    output: (x) => toRGBAWithOpacity(`${x}/100`),
  },
  {
    name: ["text-decoration-thickness"],
    regex: /^decorate-width-(.+)/,
    output: (x) => x,
  },
  {
    name: ["text-decoration-style"],
    regex: /^decorate-style-(.+)/,
    output: (x) => x,
  },
  /**
   * HEIGHT
   */
  {
    name: ["height"],
    regex: /^h-(.+)/,
    output: (x) => x,
  },
  {
    name: ["width"],
    regex: /^w-(.+)/,
    output: (x) => x,
  },
  {
    name: ["min-height"],
    regex: /^min-h-(.+)/,
    output: (x) => x,
  },
  {
    name: ["min-width"],
    regex: /^min-w-(.+)/,
    output: (x) => x,
  },
  /**
   * Overflow
   */
  {
    name: ["overflow-x"],
    regex: /^overflow-x-(.+)/,
    output: (x) => x,
  },
  {
    name: ["overflow-y"],
    regex: /^overflow-y-(.+)/,
    output: (x) => x,
  },
  {
    name: ["overflow"],
    regex: /^overflow-(.+)/,
    output: (x) => x,
  },
];

