import iniquity from "../lib/ipl"

iniquity.render(
    {
        text: "WELCOME.ANS",
        encoding: "CP437",
        mode: "line",
        speed: 50
    }
)

iniquity.print("\r\n")
iniquity.pause()