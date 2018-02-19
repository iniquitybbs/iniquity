# Documentation
Yeah, a lot of work to be done here. I'm also converting to RDoc format at a later date. For now, just read what I have here, try to make sense of it, and don't bug me. HAHAHA... j/k.

## Scratch Pad
Mostly rough notes at this point. I will expand on these ideas, turning this portion of the README into a formal whitepaper, or design document...

### Core Concepts
1. A modern BBS should be as easy to setup for the novice sysop as it is for the novice user.
2. Much like an operating system, a BBS system contains core functionality with core utilities, yet, allows packages/components to be installed, altering the functionality.
2. Every module should be treated as a unique component. Each module component contains proper
instructions for its functionality. Every module can be displayed over a Terminal or Web interface.

### Legacy Backlog
As I read about Iniquity, its users, its sysops and past attempts to revive the project, I actively
1. Have multiple WFC screens.
    1. Allow for custom WFC screens (use tab to rotate through them).
    2. This comes from features added by Spec and Jack Phlash with their work on v2 of Iniquity.
2. Have an iqterm program.
    1. I've started this. For me, the purpose of iqterm, and other "iq" utilities, are to aid the sysop/developer in creating iniquity systems and modules.
    2. iqterm will offer a web based client mode. I think this is what can fuel client side rendering over a web browser (likely learn/base it on fTelnet)



### Feature Thoughts...

1. Rumors that allow anonymous replies as well. That could be fun. :)

2. Oh yeah, "anonymity". This is cool, and, was something you could do in the original IQ anyway (at least post anonymously). I think we should make a system either support "anonymous" or not support "anonymous".

2. I like x/84 and how you can use tags for "message" areas.
3. Sysop pagers should do things like send emails or push notifications to phones, not just play ansi music in a terminal...
4. The ability to "share" messages/files. (The ability for users to make sure that what they post/upload/download is private, as a converse.)
    - This would mean that users could connect their social media accounts to the bbs.
    - This would also mean that users could opt out of message sharing or "keep private" any messages/files/information on the bbs that includes their name.
5. A sysop/developer should be able to develop Iniquity modules in a "standalone mode". Basically, how it runs in their own environment outside of the bbs is the same as if it was connected.
    -  Something like `iniquity /path/to/module/dir --standalone`