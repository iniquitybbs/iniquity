import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"
import multi from "@rollup/plugin-multi-entry"
import polyfills from "rollup-plugin-node-polyfills"
import commonjs from "@rollup/plugin-commonjs"
// @ts-ignore
import externalGlobals from "rollup-plugin-external-globals"

export default {
    input: "src/iniquity.ts",
    output: {
        name: "iniquity",
        file: "dist/bundle.js",
        format: "iife",
        sourcemap: "inline",
        strict: false,
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
            jquery: "$",
            lodash: "_"
        }),
        commonjs(),
        typescript({
            outputToFilesystem: true,
            tsconfig: "tsconfig.bundle.json"
        })
    ]
}
