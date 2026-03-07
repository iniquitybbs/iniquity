import { say, ask, pause } from "../runtime/core"

// Async wrapper to use await
;(async () => {
    say(`Welcome to Iniquity BBS!`)
    await pause()

    say("MyBBS is the best board ever made.")
    await pause()

    say("Hey there visitor.".color("red"))
    await pause()

    const name = await ask("Hey can I know your name?")
    say(`Hello ${name}!`)
    await pause()
})()
