import resolve from "@rollup/plugin-node-resolve"
import pluginJson from "@rollup/plugin-json"
import typescript from "@rollup/plugin-typescript"
import multi from "@rollup/plugin-multi-entry"
// @ts-ignore

export default {
    input: "../iniquity.ts",
    output: {
        name: "iniquity",
        file: "iniquity/bundle.js",
        format: "iife",
        sourcemap: "inline",
        strict: false
    },
    watch: {
        include: "../*.ts"
    },
    plugins: [
        multi(),
        pluginJson(),
        resolve(),
        typescript({
            outputToFilesystem: true,
            tsconfig: "tsconfig.bundle.json"
        })
    ]
}
