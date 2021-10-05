/**
 * Iniquity Archives
 * @summary A growing collection of all things Iniquity. Past and present. For use in helping build your bbs.
 * @module Archives
 * @example
 * ```typescript
 * import { Iniquity } from "@iniquitybbs/core"
 * import { Assets } from "@iniquitybbs/assets"
 *
 * const iq = new Iniquity()
 *
 * const welcomeArt = iq.artwork({ basepath: "./iniquity/bbs/assets", filename: Assets.sm_iniq2 })
 * welcomeArt.render({ clearScreenBefore: true, speed: 100 })
 *
 * iq.print(`Iniquity comes packed with easy to use assets like ${welcomeArt.filename}`).pause()
 *
 * iq.hangup()
 * ```
 */

/*
-$a. ------------------ .a$ ---------------------------- %$!, ----------------%
 `$¸   .%$$^¸$$aa.     .¸$`        .        .a$a$$.      `¸$%  $a$.        .
-.aaa$ $$$$'- $$$$$.- $aaa. -.a%$^"$$aa -- .$$$$$'- $$a. $aaa. `$,$ ----------%
;$$$$',a$a$  d$%$$$$$,'$$$$;$$$$$  $$$$$., $$%$$"  d$a$$ '$$$$; $$$   .a%$  $$a
:$$$$;$$$$%; Z$$$$$$$$;$$$$:$$$$$. $$$$^$,;$$&$$   Z$$$$,;$$$$.a$$$a..$$$   $$$
.$$$$ `$$$$.  $$$%$$$' $$$$.`$$$$  $$%$$$$ `$$$$.   $%$$$ $$$$""$$$" $$$$:  a$$
 `$$$a.$$%$   $$$$$$';a$$$`  `¸$$aa$$$$&$': `$$$$a. $$$$'a$$$`.$$'$  $$$$;  $$$
%-----.------ $$$$'--------------- $$%$$' -- `¸$$$$$%$¸' ---- $$¸$a. `"$&$$//$%$
dz      .   .:'¸'     .        .   $$$$'     .        .       `¸$$$$y.     `$$&
%--------- a`-----------.--------- $$¸' -----.------------.---------------- $$$
   .      !a    . .    .      .   .:'   .  .                  .        .:.a$$$¸
.      .  '$a,          .        a` .   'a          .   .             s` .  . .
      .    ¸$Aa         .       !a       a!      .    .         ..   %s      .s
   .         ¸¸'     . .        '$$Aa.aA$$'        . .               `!$%a.a%//$
==============================================================================
   t h e    i n i q u i t y    b u l l e t i n   b o a r d   s y s t e m
==============================================================================
*/

/**
 * The definitive collection of iniquity ansi/asci/pescii text documents.
 * Collected from various artpacks over the decades, and various incarnations of iniquity.
 */
export enum Textmode {
    /**
     * This one.
     */
    sm_iniq2 = "sm!iniq2.ans",
    we_iniq3 = "we-iniq3.ans",
    d_iniq1 = "4d-iniq1.ans",
    newuser1 = "newuser.ans"
}

/**
 * Assets constructor options
 */
export interface IQCoreAssetsOptions {
    folder: string
}

/**
 * Iniquity Archives
 * @summary What I hope will be a really cool way of accessing all of your ANSI/ASCII/PETSCII/GIF/JPEG whatever files.
 */
export class Archives {
    constructor(options?: IQCoreAssetsOptions) {}

    public load() {}
}
