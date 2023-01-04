declare module "*.jpg";
declare module "*.png";
declare module "*.svg";
declare module "*.scss";
declare global {
  interface Window {
    matchMedia: (query: string) => MediaQueryList;
  }
}
