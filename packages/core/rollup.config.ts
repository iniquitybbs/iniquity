import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import multi from "@rollup/plugin-multi-entry"
import polyfills from "rollup-plugin-node-polyfills"
import commonjs from "@rollup/plugin-commonjs"
// @ts-expect-error
import externalGlobals from "rollup-plugin-external-globals"

export default {
    input: "src/iniquity.ts",
    output: {
        name: "iniquity",
        file: "dist/bundle.js",
        format: "iife",
        sourcemap: "inline",
        globals: {
            "@iniquitybbs/core/src/library": "lib"
        }
    },
    watch: {
        include: "src/**/*.ts"
    },
    plugins: [
        multi(),
        polyfills(),
        resolve({
            preferBuiltins: false,
            moduleDirectories: ["src/library"],
            dedupe: ["@iniquitybbs/archive", "@iniquitybbs/cli", "@iniquitybbs/template", "@iniquitybbs/core", "@iniquitybbs/core/library"]
        }),
        externalGlobals({
            jquery: "$"
        }),
        commonjs(),
        typescript({
            outputToFilesystem: true,
            tsconfig: "tsconfig.bundle.json"
        })
    ],
    external: ["lodash"]
}
