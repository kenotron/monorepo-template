import { tscTask, esbuildTask } from "just-scripts";
export const typecheck = tscTask({ emitDeclarationOnly: true });
export const build = esbuildTask();
