#!/usr/bin/env ruby
# encoding: UTF-8

#-$a. ------------------ .a$ ---------------------------- %$!, ----------------%
# `$¸   .%$$^¸$$aa.     .¸$`        .        .a$a$$.      `¸$%  $a$.        .
#-.aaa$ $$$$'- $$$$$.- $aaa. -.a%$^"$$aa -- .$$$$$'- $$a. $aaa. `$,$ ----------%
#;$$$$',a$a$  d$%$$$$$,'$$$$;$$$$$  $$$$$., $$%$$"  d$a$$ '$$$$; $$$   .a%$  $$a
#:$$$$;$$$$%; Z$$$$$$$$;$$$$:$$$$$. $$$$^$,;$$&$$   Z$$$$,;$$$$.a$$$a..$$$   $$$
#.$$$$ `$$$$.  $$$%$$$' $$$$.`$$$$  $$%$$$$ `$$$$.   $%$$$ $$$$""$$$" $$$$:  a$$
# `$$$a.$$%$   $$$$$$';a$$$`  `¸$$aa$$$$&$': `$$$$a. $$$$'a$$$`.$$'$  $$$$;  $$$
#%-----.------ $$$$'--------------- $$%$$' -- `¸$$$$$%$¸' ---- $$¸$a. `"$&$$#$%$
#dz      .   .:'¸'     .        .   $$$$'     .        .       `¸$$$$y.     `$$&
#%--------- a`-----------.--------- $$¸' -----.------------.---------------- $$$
#   .      !a    . .    .      .   .:'   .  .                  .        .:.a$$$¸
#.      .  '$a,          .        a` .   'a          .   .             s` .  . .
#      .    ¸$Aa         .       !a       a!      .    .         ..   %s      .s
#   .         ¸¸'     . .        '$$Aa.aA$$'        . .               `!$%a.a%#$
#==============================================================================
#   t h e    i n i q u i t y    b u l l e t i n    b o a r d    s y s t e m
#==============================================================================

require "yard"
require "rdoc"

# @api public
# @api The Iniquity Model is not feature complete.
#
# @note A Comprehensive interface to the Iniquity Data Model
#
# @author Dan Stephenson 
# @author Lawrence Manuel (smooth)

module Iniquity

    # @api users
    class users
        # @api public
        #
        # Create a new Iniquity user record.
        #
        # @param data [Symbol] the paramater format type, `:object` or `:json` or `:yaml`
        # @return [Object] the object converted into the expected format.
        def create(data = :object || :json)
            # Do Something...
        end
        #
        # @param [Symbol] the format type, `:object` or `:json`
        # @return [Object] the object converted into the expected format.

        def read(data = :object || :json)
        end
        # Create a new BBS user.
        #
        # @param [Symbol] the format type, `:object` or `:html`
        # @return [Object] the object converted into the expected format.

        def update(param = :object || :json)
        end
        # Update an existing BBS user.
        #
        # @param [Symbol] the format type, `:object` or `:json`
        # @return [Object] the object converted into the expected format.

        def delete(params = :object)
        end
    end
end