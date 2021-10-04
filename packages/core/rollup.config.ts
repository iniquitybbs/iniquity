import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"

export default {
    input: "packages/core/src/app.ts",
    output: {
        file: "packages/core/dist/bundle.js",
        format: "cjs",
        sourcemap: "inline"
    },
    watch: {
        include: "packages/core/src/*"
    },
    plugins: [
        resolve(),
        typescript({
            tsconfig: "packages/core/tsconfig.json",
            outDir: "packages/core",
            outputToFilesystem: true
        })
    ],
    external: ["lodash"]
}
