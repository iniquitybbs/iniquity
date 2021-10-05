import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import multi from "@rollup/plugin-multi-entry"

export default {
    input: "src/**/*.ts",
    output: {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: "inline"
    },
    watch: {
        include: "src/*"
    },
    plugins: [
        multi(),
        resolve(),
        typescript({
            outputToFilesystem: true
        })
    ],
    external: ["lodash"]
}
