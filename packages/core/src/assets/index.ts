/**
 * Iniquity Core Assets
 * @summary A growing collection of all things Iniquity. Past and present. For use in helping build your bbs.
 * @module IQCoreAssets
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

import iq from "../index"

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

export enum Assets {
    /**
     * The hoodie artwork
     * @author smooth
     */
    _5m_hodl4a = "5m-hodl4a.ans",
    _5m_matrix_1b2 = "5m-matrix-1b2.ans",
    _5m_ink2menu = "5m-ink2menu.ans",
    _5m_iniquity3 = "5m-iniquity3.xb",

    iq3_logoff = "iq3-logoff.ans",
    iq3_hello = "iq3-hello.ans",
    iq3_welcome = "iq3-welcome.ans",
    iq3_welcome2 = "iq3-welcome2.ans",
    iq3_apply = "iq3-apply.ans",
    iq3_login = "iq3-login.ans",
    iq3_uswfc = "us-wfc.ans",
    iq3_avewfc = "iq3-ave-wfc.ans",
    iq3_cxwfc = "iq3-cxwfc.ans",
    drm_inq1_wfc = "drm-inq1.ans",

    sm_iniq2 = "sm!iniq2.ans",
    us_wfc = "us-wfc.ans"
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
export class IQCoreAssets {
    private folder: string

    constructor(options?: IQCoreAssetsOptions) {
        this.folder = options?.folder || ""
    }

    public load(filename: Assets) {
        iq.artwork({ basepath: this.folder, filename: filename })
    }
}
