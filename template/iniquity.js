
const iq = new Iniquity("/iniquity/lib/ipl")

iq.render(
    {
        text: "WELCOME.ANS",
        encoding: "CP437",
        mode: "line",
        speed: 50
    }
)

console.print("\r\n")
console.pause()