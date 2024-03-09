import { AstroI18nextConfig, AstroI18nextGlobal } from "./types";
export declare const AstroI18next: AstroI18nextGlobal;
export declare const setAstroI18nextConfig: (config: AstroI18nextConfig) => void;
export declare const astroI18nextConfigBuilder: (config: AstroI18nextConfig) => AstroI18nextConfig;
/**
 * This will create a mapping of translated routes to search them easily.
 *
 * TODO: render all routes mappings in here (even those not translated),
 * this will help simplify utility functions logic
 */
export declare const flattenRoutes: (routes: AstroI18nextConfig["routes"], previous?: string[], translatedPrevious?: string[], prevResult?: AstroI18nextConfig["flatRoutes"]) => AstroI18nextConfig["flatRoutes"];
