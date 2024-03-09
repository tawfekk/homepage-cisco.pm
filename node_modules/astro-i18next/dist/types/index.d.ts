import { AstroIntegration } from "astro";
import { AstroI18nextConfig, AstroI18nextOptions } from "./types";
declare const _default: (options?: AstroI18nextOptions) => AstroIntegration;
export default _default;
export declare function initAstroI18next(config: AstroI18nextConfig): void;
export { AstroI18next } from "./config";
export { createReferenceStringFromHTML, detectLocaleFromPath, interpolate, localizePath, localizeUrl, } from "./utils";
export { AstroI18nextConfig, AstroI18nextOptions } from "./types";
