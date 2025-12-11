/// <reference types="vite/client" />

// Allow importing JSON files
declare module "*.json" {
  const value: Record<string, string>;
  export default value;
}
