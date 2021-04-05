import { tscTask } from "just-scripts";
export const typecheck = tscTask({ noEmit: true });
export const build = tscTask({ isolatedModules: true, declaration: true });
