// /** 
//  * Еuphoria BBS Template
//  * @author ispyhumanfly
//  * @license MIT
//  */
// import { artwork, say, wait } from "@iniquitybbs/iniquity"

// say("A 132x37 terminal resolution is required to view this BBS.")

// artwork({ basepath: "/dist/assets" }).render({ filename: "ep_welcome.ans", clearScreenBefore: true, mode: "line", speed: 30 }).pause()

// artwork({ basepath: "/dist/assets" }).render({ filename: "ep_main_menu.ans", clearScreenBefore: true, mode: "character", speed: 30 })

// say("The new euphoria bbs is coming soon. Written from scratch using iniquity 3.".gotoxy(29, 28)).gotoxy(1, 1)

// wait(15000)

// artwork({ basepath: "/dist/assets" }).render({ filename: "ep_logoff.ans", mode: "line", clearScreenBefore: true, speed: 30 })

import { IQ, IQModule, IQModuleRuntime, IQReactor, IQModuleACLS } from "@iniquitybbs/iniquity";

@IQModule({
    basepath: "/iniquity/core/src/assets",
    data: IQReactor({
        message: "foo"
    }),
    assets: "",
    access: IQModuleACLS.low,
    encoding: "CP437",
    computed: undefined
})
export class LoginModule extends IQ {

    @IQModuleRuntime({ debug: true })
    start() {
        // Say hello to the user
        this.say("Hello, dear visitor!").pause();

        // Ask for the user's name
        this.data.observe("username", (newName) => {
            if (newName) {
                // Greet the user and save their name
                this.say(`Welcome, ${newName}!`).pause();
                this.saveNameToJSON(newName);
            }
        });

        this.data.model.username = this.ask("What's your name?").color("green");
    }

    private saveNameToJSON(name: string): void {
        // // Save the username to a JSON file
        // fs.writeFileSync('username.json', JSON.stringify({ username: name }));
        this.say("Your name has been saved.").pause();
    }
}

