import { say, pause, ask } from "../runtime/core"

;(async () => {
    say("Testing the new runtime!")
    await pause()

    const name = await ask("What's your name?")
    say(`Hello ${name}!`)
    await pause()
})()
