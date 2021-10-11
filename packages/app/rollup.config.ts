import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import multi from "@rollup/plugin-multi-entry"

export default {
    input: "src/app.ts",
    output: {
        file: "dist/bundle.js",
        format: "cjs",
        sourcemap: "inline"
    },
    watch: {
        include: "src/app.ts"
    },
    plugins: [
        multi(),
        resolve(),
        typescript({
            outputToFilesystem: true,
            tsconfig: "tsconfig.bundle.json"
        })
    ],
    external: ["lodash"]
}
