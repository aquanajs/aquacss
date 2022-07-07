import type { AquaCSSConfig } from "./utils/config.ts";
import defaultCSS from "./assets/default.ts";
import { BetterMap } from "../deps/utils.ts";
import { parseCSS } from "./generate.ts"

export class AquaCSSGenerator {
  constructor(config: AquaCSSConfig) {
  }
  escapeClassName(className: string) {
    return className.replace(/([!"#$%&'()*+,-./:;<=>?@[\\\]^`{|}])/g, "\\$&");
  }
  parse(classes: string): string {
    return `${defaultCSS}\n\n/*\n * GENERATED CSS\n * BY AQUANA\n */\n\n${
      this.generateCSS(classes)
    }`;
  }
  generateCSS(classes: string): string {
    const classData = this.generate(classes.split(" "));
    return classData.map((attr, className) => {
      return `.${className} {\n${attr.map((x) => `${x};`).join("\n")}\n}`;
    }).join("\n");
  }
  generate(classes: string[]): BetterMap<string, string[]> {
    const classMap = new BetterMap<string, string[]>();
    for (const className of classes) {
      const css = this.parseClass(className);
      if (!css) continue;
      const newClassName = this.escapeClassName(className);
      classMap.set(newClassName, css);
    }
    return classMap;
  }
  parseClass(className: string): string[] | null {
    const whichAttribute = parseCSS.find((x) => x.regex.test(className));
    console.log(className);
    if (!whichAttribute) return null;
    const value = whichAttribute.regex.exec(className);
    console.log(className, value);
    if (!value) return null;
    return whichAttribute.output(value[1]);
  }
}
