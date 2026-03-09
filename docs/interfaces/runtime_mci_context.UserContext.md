# Interface: UserContext

[runtime/mci/context](../modules/runtime_mci_context.md).UserContext

User context for MCI code expansion
Contains all user-related data that can be referenced via @-codes

## Table of contents

### Properties

- [age](runtime_mci_context.UserContext.md#age)
- [alias](runtime_mci_context.UserContext.md#alias)
- [ansi](runtime_mci_context.UserContext.md#ansi)
- [birthDate](runtime_mci_context.UserContext.md#birthdate)
- [callsToday](runtime_mci_context.UserContext.md#callstoday)
- [color](runtime_mci_context.UserContext.md#color)
- [downloadBytes](runtime_mci_context.UserContext.md#downloadbytes)
- [downloadFiles](runtime_mci_context.UserContext.md#downloadfiles)
- [downloadKB](runtime_mci_context.UserContext.md#downloadkb)
- [editor](runtime_mci_context.UserContext.md#editor)
- [email](runtime_mci_context.UserContext.md#email)
- [emailsSent](runtime_mci_context.UserContext.md#emailssent)
- [expert](runtime_mci_context.UserContext.md#expert)
- [feedbackSent](runtime_mci_context.UserContext.md#feedbacksent)
- [fileProtocol](runtime_mci_context.UserContext.md#fileprotocol)
- [firstName](runtime_mci_context.UserContext.md#firstname)
- [firstOn](runtime_mci_context.UserContext.md#firston)
- [gender](runtime_mci_context.UserContext.md#gender)
- [handle](runtime_mci_context.UserContext.md#handle)
- [hostname](runtime_mci_context.UserContext.md#hostname)
- [hotkeys](runtime_mci_context.UserContext.md#hotkeys)
- [id](runtime_mci_context.UserContext.md#id)
- [ipAddress](runtime_mci_context.UserContext.md#ipaddress)
- [lastName](runtime_mci_context.UserContext.md#lastname)
- [lastOn](runtime_mci_context.UserContext.md#laston)
- [location](runtime_mci_context.UserContext.md#location)
- [mailUnread](runtime_mci_context.UserContext.md#mailunread)
- [mailWaiting](runtime_mci_context.UserContext.md#mailwaiting)
- [pause](runtime_mci_context.UserContext.md#pause)
- [postsToday](runtime_mci_context.UserContext.md#poststoday)
- [postsTotal](runtime_mci_context.UserContext.md#poststotal)
- [protocol](runtime_mci_context.UserContext.md#protocol)
- [realName](runtime_mci_context.UserContext.md#realname)
- [securityLevel](runtime_mci_context.UserContext.md#securitylevel)
- [terminalHeight](runtime_mci_context.UserContext.md#terminalheight)
- [terminalType](runtime_mci_context.UserContext.md#terminaltype)
- [terminalWidth](runtime_mci_context.UserContext.md#terminalwidth)
- [timeBanked](runtime_mci_context.UserContext.md#timebanked)
- [timeLeft](runtime_mci_context.UserContext.md#timeleft)
- [timeOnToday](runtime_mci_context.UserContext.md#timeontoday)
- [timeUsed](runtime_mci_context.UserContext.md#timeused)
- [totalCalls](runtime_mci_context.UserContext.md#totalcalls)
- [uploadBytes](runtime_mci_context.UserContext.md#uploadbytes)
- [uploadFiles](runtime_mci_context.UserContext.md#uploadfiles)
- [uploadKB](runtime_mci_context.UserContext.md#uploadkb)

## Properties

### age

• `Optional` **age**: `number`

#### Defined in

[core/src/mci/context.ts:45](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L45)

___

### alias

• **alias**: `string`

#### Defined in

[core/src/mci/context.ts:37](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L37)

___

### ansi

• `Optional` **ansi**: `boolean`

#### Defined in

[core/src/mci/context.ts:92](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L92)

___

### birthDate

• `Optional` **birthDate**: `Date`

#### Defined in

[core/src/mci/context.ts:46](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L46)

___

### callsToday

• `Optional` **callsToday**: `number`

#### Defined in

[core/src/mci/context.ts:51](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L51)

___

### color

• `Optional` **color**: `boolean`

#### Defined in

[core/src/mci/context.ts:91](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L91)

___

### downloadBytes

• `Optional` **downloadBytes**: `number`

#### Defined in

[core/src/mci/context.ts:61](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L61)

___

### downloadFiles

• `Optional` **downloadFiles**: `number`

#### Defined in

[core/src/mci/context.ts:63](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L63)

___

### downloadKB

• `Optional` **downloadKB**: `number`

#### Defined in

[core/src/mci/context.ts:65](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L65)

___

### editor

• `Optional` **editor**: `string`

#### Defined in

[core/src/mci/context.ts:84](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L84)

___

### email

• `Optional` **email**: `string`

#### Defined in

[core/src/mci/context.ts:42](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L42)

___

### emailsSent

• `Optional` **emailsSent**: `number`

#### Defined in

[core/src/mci/context.ts:70](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L70)

___

### expert

• `Optional` **expert**: `boolean`

#### Defined in

[core/src/mci/context.ts:88](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L88)

___

### feedbackSent

• `Optional` **feedbackSent**: `number`

#### Defined in

[core/src/mci/context.ts:71](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L71)

___

### fileProtocol

• `Optional` **fileProtocol**: `string`

#### Defined in

[core/src/mci/context.ts:85](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L85)

___

### firstName

• `Optional` **firstName**: `string`

#### Defined in

[core/src/mci/context.ts:39](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L39)

___

### firstOn

• `Optional` **firstOn**: `Date`

#### Defined in

[core/src/mci/context.ts:52](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L52)

___

### gender

• `Optional` **gender**: `string`

#### Defined in

[core/src/mci/context.ts:47](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L47)

___

### handle

• `Optional` **handle**: `string`

#### Defined in

[core/src/mci/context.ts:41](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L41)

___

### hostname

• `Optional` **hostname**: `string`

#### Defined in

[core/src/mci/context.ts:77](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L77)

___

### hotkeys

• `Optional` **hotkeys**: `boolean`

#### Defined in

[core/src/mci/context.ts:89](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L89)

___

### id

• **id**: `number`

#### Defined in

[core/src/mci/context.ts:36](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L36)

___

### ipAddress

• `Optional` **ipAddress**: `string`

#### Defined in

[core/src/mci/context.ts:76](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L76)

___

### lastName

• `Optional` **lastName**: `string`

#### Defined in

[core/src/mci/context.ts:40](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L40)

___

### lastOn

• `Optional` **lastOn**: `Date`

#### Defined in

[core/src/mci/context.ts:53](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L53)

___

### location

• `Optional` **location**: `string`

#### Defined in

[core/src/mci/context.ts:43](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L43)

___

### mailUnread

• `Optional` **mailUnread**: `number`

#### Defined in

[core/src/mci/context.ts:73](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L73)

___

### mailWaiting

• `Optional` **mailWaiting**: `number`

#### Defined in

[core/src/mci/context.ts:72](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L72)

___

### pause

• `Optional` **pause**: `boolean`

#### Defined in

[core/src/mci/context.ts:90](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L90)

___

### postsToday

• `Optional` **postsToday**: `number`

#### Defined in

[core/src/mci/context.ts:69](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L69)

___

### postsTotal

• `Optional` **postsTotal**: `number`

#### Defined in

[core/src/mci/context.ts:68](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L68)

___

### protocol

• `Optional` **protocol**: `string`

#### Defined in

[core/src/mci/context.ts:78](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L78)

___

### realName

• `Optional` **realName**: `string`

#### Defined in

[core/src/mci/context.ts:38](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L38)

___

### securityLevel

• **securityLevel**: `number`

#### Defined in

[core/src/mci/context.ts:44](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L44)

___

### terminalHeight

• `Optional` **terminalHeight**: `number`

#### Defined in

[core/src/mci/context.ts:83](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L83)

___

### terminalType

• `Optional` **terminalType**: `string`

#### Defined in

[core/src/mci/context.ts:81](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L81)

___

### terminalWidth

• `Optional` **terminalWidth**: `number`

#### Defined in

[core/src/mci/context.ts:82](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L82)

___

### timeBanked

• `Optional` **timeBanked**: `number`

#### Defined in

[core/src/mci/context.ts:57](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L57)

___

### timeLeft

• `Optional` **timeLeft**: `number`

#### Defined in

[core/src/mci/context.ts:55](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L55)

___

### timeOnToday

• `Optional` **timeOnToday**: `number`

#### Defined in

[core/src/mci/context.ts:54](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L54)

___

### timeUsed

• `Optional` **timeUsed**: `number`

#### Defined in

[core/src/mci/context.ts:56](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L56)

___

### totalCalls

• **totalCalls**: `number`

#### Defined in

[core/src/mci/context.ts:50](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L50)

___

### uploadBytes

• `Optional` **uploadBytes**: `number`

#### Defined in

[core/src/mci/context.ts:60](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L60)

___

### uploadFiles

• `Optional` **uploadFiles**: `number`

#### Defined in

[core/src/mci/context.ts:62](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L62)

___

### uploadKB

• `Optional` **uploadKB**: `number`

#### Defined in

[core/src/mci/context.ts:64](https://github.com/iniquitybbs/iniquity/blob/48d6dbd/packages/core/src/mci/context.ts#L64)
