/**
 * Position Marker System
 * @module runtime/mci/codes/position
 * @summary Original Iniquity-style position markers (^X01-^X99)
 */

const ESC = "\x1b"

export interface PositionMarker {
    id: number
    x: number
    y: number
    foreground?: number
    background?: number
    attributes?: number
    savedAt: Date
}

export interface PositionState {
    x: number
    y: number
    foreground?: number
    background?: number
    attributes?: number
}

export class PositionMarkerProcessor {
    private markers: Map<number, PositionMarker> = new Map()
    private currentPosition: PositionState = { x: 1, y: 1 }
    private currentColor: { foreground?: number; background?: number; attributes?: number } = {}

    savePosition(id: number, state?: Partial<PositionState>): void {
        if (id < 1 || id > 99) {
            throw new Error(`Position marker ID must be between 1 and 99, got ${id}`)
        }

        const marker: PositionMarker = {
            id,
            x: state?.x ?? this.currentPosition.x,
            y: state?.y ?? this.currentPosition.y,
            foreground: state?.foreground ?? this.currentColor.foreground,
            background: state?.background ?? this.currentColor.background,
            attributes: state?.attributes ?? this.currentColor.attributes,
            savedAt: new Date()
        }

        this.markers.set(id, marker)
    }

    getPosition(id: number): PositionMarker | undefined {
        return this.markers.get(id)
    }

    hasPosition(id: number): boolean {
        return this.markers.has(id)
    }

    gotoPosition(id: number): string | null {
        const marker = this.markers.get(id)
        if (!marker) return null

        let sequence = `${ESC}[${marker.y};${marker.x}H`

        if (marker.foreground !== undefined || marker.background !== undefined) {
            sequence += this.buildColorSequence(marker.foreground, marker.background, marker.attributes)
        }

        this.currentPosition.x = marker.x
        this.currentPosition.y = marker.y

        return sequence
    }

    gotoPositionOnly(id: number): string | null {
        const marker = this.markers.get(id)
        if (!marker) return null

        this.currentPosition.x = marker.x
        this.currentPosition.y = marker.y

        return `${ESC}[${marker.y};${marker.x}H`
    }

    updatePosition(id: number, text: string): string | null {
        const gotoSeq = this.gotoPosition(id)
        if (!gotoSeq) return null

        return gotoSeq + text
    }

    clearPosition(id: number): boolean {
        return this.markers.delete(id)
    }

    clearAllPositions(): void {
        this.markers.clear()
    }

    listPositions(): number[] {
        return Array.from(this.markers.keys()).sort((a, b) => a - b)
    }

    getMarkerCount(): number {
        return this.markers.size
    }

    setCurrentPosition(x: number, y: number): void {
        this.currentPosition.x = x
        this.currentPosition.y = y
    }

    getCurrentPosition(): PositionState {
        return { ...this.currentPosition }
    }

    setCurrentColor(foreground?: number, background?: number, attributes?: number): void {
        if (foreground !== undefined) this.currentColor.foreground = foreground
        if (background !== undefined) this.currentColor.background = background
        if (attributes !== undefined) this.currentColor.attributes = attributes
    }

    processMarkerCode(text: string): { result: string; markersFound: number[] } {
        const markersFound: number[] = []

        const result = text.replace(/\^X(\d{2})/g, (match, numStr) => {
            const id = parseInt(numStr, 10)
            if (id >= 1 && id <= 99) {
                this.savePosition(id)
                markersFound.push(id)
            }
            return ""
        })

        return { result, markersFound }
    }

    private buildColorSequence(foreground?: number, background?: number, attributes?: number): string {
        const parts: string[] = []

        if (attributes !== undefined) {
            if (attributes & 0x01) parts.push("1")
            if (attributes & 0x02) parts.push("4")
            if (attributes & 0x04) parts.push("5")
            if (attributes & 0x08) parts.push("7")
        }

        if (foreground !== undefined) {
            if (foreground >= 8) {
                parts.push("1")
                parts.push((30 + (foreground - 8)).toString())
            } else {
                parts.push((30 + foreground).toString())
            }
        }

        if (background !== undefined) {
            parts.push((40 + (background % 8)).toString())
        }

        if (parts.length === 0) return ""
        return `${ESC}[${parts.join(";")}m`
    }

    exportMarkers(): Record<number, PositionMarker> {
        const result: Record<number, PositionMarker> = {}
        for (const [id, marker] of this.markers) {
            result[id] = { ...marker }
        }
        return result
    }

    importMarkers(markers: Record<number, PositionMarker>): void {
        for (const [idStr, marker] of Object.entries(markers)) {
            const id = parseInt(idStr, 10)
            if (id >= 1 && id <= 99) {
                this.markers.set(id, { ...marker })
            }
        }
    }
}

export function parsePositionMarker(text: string): { id: number; index: number } | null {
    const match = text.match(/\^X(\d{2})/)
    if (!match) return null

    return {
        id: parseInt(match[1], 10),
        index: match.index!
    }
}

export function createPositionMarker(id: number): string {
    if (id < 1 || id > 99) {
        throw new Error(`Position marker ID must be between 1 and 99, got ${id}`)
    }
    return `^X${id.toString().padStart(2, "0")}`
}

export function stripPositionMarkers(text: string): string {
    return text.replace(/\^X\d{2}/g, "")
}

export function findAllPositionMarkers(text: string): number[] {
    const markers: number[] = []
    const regex = /\^X(\d{2})/g
    let match

    while ((match = regex.exec(text)) !== null) {
        const id = parseInt(match[1], 10)
        if (id >= 1 && id <= 99 && !markers.includes(id)) {
            markers.push(id)
        }
    }

    return markers.sort((a, b) => a - b)
}
