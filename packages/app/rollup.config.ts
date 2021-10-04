import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"

export default {
    input: "packages/app/src/app.ts",
    output: {
        file: "packages/app/dist/bundle.js",
        format: "cjs",
        sourcemap: "inline"
    },
    watch: {
        include: "packages/app/src/app.ts"
    },
    plugins: [
        resolve(),
        typescript({
            tsconfig: "packages/app/tsconfig.json"
        })
    ],
    external: ["lodash"]
}
