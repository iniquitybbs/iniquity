/**
 * IQ Group System
 * @module group
 * @summary User groups, access control, and permissions
 */

import * as fs from 'fs'
import * as path from 'path'
import { UserAccessLevel } from './user'
import { Transaction, Validate, Measure } from './decorators-runtime'

/**
 * Group permissions
 */
export interface IGroupPermissions {
    [key: string]: boolean | number | Record<string, boolean>
    canPost: boolean
    canUpload: boolean
    canDownload: boolean
    canChat: boolean
    canPage: boolean
    canAccessDoors: boolean
    canAccessFiles: boolean
    canAccessMessages: boolean
    canModerate: boolean
    canManageUsers: boolean
    canManageGroups: boolean
    canManageSystem: boolean
    maxDailyTime: number
    maxDailyDownloads: number
    maxDailyUploads: number
    downloadRatio: number
    uploadCredit: number
    custom: Record<string, boolean>
}

/**
 * Group data structure
 */
export interface IGroupData {
    id: number
    name: string
    description: string
    accessLevel: UserAccessLevel
    permissions: IGroupPermissions
    members: string[]
    createdAt: string
    modifiedAt: string
    flags: number
    color: string
    prefix: string
    suffix: string
}

/**
 * Group options for creating groups
 */
export interface IGroupOptions {
    name: string
    description?: string
    accessLevel?: UserAccessLevel
    permissions?: Partial<IGroupPermissions>
}

/**
 * Default permissions for different access levels
 */
export const DEFAULT_PERMISSIONS: Record<UserAccessLevel, IGroupPermissions> = {
    [UserAccessLevel.guest]: {
        canPost: false,
        canUpload: false,
        canDownload: false,
        canChat: false,
        canPage: false,
        canAccessDoors: false,
        canAccessFiles: false,
        canAccessMessages: true,
        canModerate: false,
        canManageUsers: false,
        canManageGroups: false,
        canManageSystem: false,
        maxDailyTime: 30,
        maxDailyDownloads: 0,
        maxDailyUploads: 0,
        downloadRatio: 0,
        uploadCredit: 0,
        custom: {}
    },
    [UserAccessLevel.low]: {
        canPost: true,
        canUpload: false,
        canDownload: true,
        canChat: true,
        canPage: false,
        canAccessDoors: false,
        canAccessFiles: true,
        canAccessMessages: true,
        canModerate: false,
        canManageUsers: false,
        canManageGroups: false,
        canManageSystem: false,
        maxDailyTime: 60,
        maxDailyDownloads: 5,
        maxDailyUploads: 0,
        downloadRatio: 0,
        uploadCredit: 0,
        custom: {}
    },
    [UserAccessLevel.normal]: {
        canPost: true,
        canUpload: true,
        canDownload: true,
        canChat: true,
        canPage: true,
        canAccessDoors: true,
        canAccessFiles: true,
        canAccessMessages: true,
        canModerate: false,
        canManageUsers: false,
        canManageGroups: false,
        canManageSystem: false,
        maxDailyTime: 120,
        maxDailyDownloads: 10,
        maxDailyUploads: 5,
        downloadRatio: 3,
        uploadCredit: 2,
        custom: {}
    },
    [UserAccessLevel.high]: {
        canPost: true,
        canUpload: true,
        canDownload: true,
        canChat: true,
        canPage: true,
        canAccessDoors: true,
        canAccessFiles: true,
        canAccessMessages: true,
        canModerate: true,
        canManageUsers: false,
        canManageGroups: false,
        canManageSystem: false,
        maxDailyTime: 240,
        maxDailyDownloads: 25,
        maxDailyUploads: 15,
        downloadRatio: 5,
        uploadCredit: 3,
        custom: {}
    },
    [UserAccessLevel.sysop]: {
        canPost: true,
        canUpload: true,
        canDownload: true,
        canChat: true,
        canPage: true,
        canAccessDoors: true,
        canAccessFiles: true,
        canAccessMessages: true,
        canModerate: true,
        canManageUsers: true,
        canManageGroups: true,
        canManageSystem: false,
        maxDailyTime: 0,
        maxDailyDownloads: 0,
        maxDailyUploads: 0,
        downloadRatio: 0,
        uploadCredit: 0,
        custom: {}
    },
    [UserAccessLevel.admin]: {
        canPost: true,
        canUpload: true,
        canDownload: true,
        canChat: true,
        canPage: true,
        canAccessDoors: true,
        canAccessFiles: true,
        canAccessMessages: true,
        canModerate: true,
        canManageUsers: true,
        canManageGroups: true,
        canManageSystem: true,
        maxDailyTime: 0,
        maxDailyDownloads: 0,
        maxDailyUploads: 0,
        downloadRatio: 0,
        uploadCredit: 0,
        custom: {}
    }
}

/**
 * Group database interface
 */
export interface IGroupDatabase {
    load(name: string): IGroupData | null
    save(group: IGroupData): boolean
    create(group: Partial<IGroupData>): IGroupData | null
    delete(name: string): boolean
    exists(name: string): boolean
    list(): IGroupData[]
    getNextId(): number
}

/**
 * JSON file-based group database
 */
export class JSONGroupDatabase implements IGroupDatabase {
    private dataPath: string
    private groups: Map<string, IGroupData> = new Map()
    private nextId: number = 1

    constructor(dataPath: string = './data/groups') {
        this.dataPath = dataPath
        this.ensureDataDir()
        this.loadAllGroups()
        this.ensureDefaultGroups()
    }

    private ensureDataDir(): void {
        if (!fs.existsSync(this.dataPath)) {
            fs.mkdirSync(this.dataPath, { recursive: true })
        }
    }

    private getGroupFilePath(name: string): string {
        const safeName = name.toLowerCase().replace(/[^a-z0-9]/g, '_')
        return path.join(this.dataPath, `${safeName}.json`)
    }

    private loadAllGroups(): void {
        try {
            const files = fs.readdirSync(this.dataPath)
            for (const file of files) {
                if (file.endsWith('.json')) {
                    const filePath = path.join(this.dataPath, file)
                    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
                    this.groups.set(data.name.toLowerCase(), data)
                    if (data.id >= this.nextId) {
                        this.nextId = data.id + 1
                    }
                }
            }
        } catch (err) {
            // Directory might not exist yet
        }
    }

    private ensureDefaultGroups(): void {
        const defaultGroups = [
            { name: 'Guests', accessLevel: UserAccessLevel.guest },
            { name: 'Users', accessLevel: UserAccessLevel.normal },
            { name: 'Power Users', accessLevel: UserAccessLevel.high },
            { name: 'Sysops', accessLevel: UserAccessLevel.sysop },
            { name: 'Admins', accessLevel: UserAccessLevel.admin }
        ]

        for (const group of defaultGroups) {
            if (!this.exists(group.name)) {
                this.create({
                    name: group.name,
                    description: `Default ${group.name} group`,
                    accessLevel: group.accessLevel,
                    permissions: DEFAULT_PERMISSIONS[group.accessLevel]
                })
            }
        }
    }

    load(name: string): IGroupData | null {
        return this.groups.get(name.toLowerCase()) || null
    }

    save(group: IGroupData): boolean {
        try {
            const filePath = this.getGroupFilePath(group.name)
            group.modifiedAt = new Date().toISOString()
            fs.writeFileSync(filePath, JSON.stringify(group, null, 2))
            this.groups.set(group.name.toLowerCase(), group)
            return true
        } catch (err) {
            console.error('Failed to save group:', err)
            return false
        }
    }

    create(groupData: Partial<IGroupData>): IGroupData | null {
        if (!groupData.name) return null
        if (this.exists(groupData.name)) return null

        const accessLevel = groupData.accessLevel ?? UserAccessLevel.normal
        const defaultPerms = DEFAULT_PERMISSIONS[accessLevel]

        const group: IGroupData = {
            id: this.getNextId(),
            name: groupData.name,
            description: groupData.description || '',
            accessLevel: accessLevel,
            permissions: { ...defaultPerms, ...groupData.permissions },
            members: groupData.members || [],
            createdAt: new Date().toISOString(),
            modifiedAt: new Date().toISOString(),
            flags: groupData.flags || 0,
            color: groupData.color || 'white',
            prefix: groupData.prefix || '',
            suffix: groupData.suffix || ''
        }

        if (this.save(group)) {
            this.nextId++
            return group
        }
        return null
    }

    delete(name: string): boolean {
        try {
            const filePath = this.getGroupFilePath(name)
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath)
            }
            this.groups.delete(name.toLowerCase())
            return true
        } catch (err) {
            return false
        }
    }

    exists(name: string): boolean {
        return this.groups.has(name.toLowerCase())
    }

    list(): IGroupData[] {
        return Array.from(this.groups.values())
    }

    getNextId(): number {
        return this.nextId
    }
}

/**
 * Global group database instance
 */
let globalGroupDatabase: IGroupDatabase | null = null

export function setGroupDatabase(db: IGroupDatabase): void {
    globalGroupDatabase = db
}

export function getGroupDatabase(): IGroupDatabase {
    if (!globalGroupDatabase) {
        globalGroupDatabase = new JSONGroupDatabase()
    }
    return globalGroupDatabase
}

/**
 * Initialize the group database with a BBS-specific data path
 * @param bbsPath - The root directory of the BBS (where iniquity.ts lives)
 */
export function initGroupDatabase(bbsPath: string): void {
    const dataPath = path.join(bbsPath, 'data', 'groups')
    globalGroupDatabase = new JSONGroupDatabase(dataPath)
}

/**
 * Group class for managing user groups
 */
export class IQGroup {
    private data: IGroupData | null = null
    private db: IGroupDatabase

    constructor(options: IGroupOptions | string) {
        this.db = getGroupDatabase()
        
        if (typeof options === 'string') {
            this.data = this.db.load(options)
        } else {
            this.data = this.db.load(options.name)
            if (!this.data && options.name) {
                // Create new group
                this.data = this.db.create({
                    name: options.name,
                    description: options.description,
                    accessLevel: options.accessLevel,
                    permissions: options.permissions as IGroupPermissions
                })
            }
        }
    }

    /**
     * Get group name
     */
    get name(): string {
        return this.data?.name || ''
    }

    /**
     * Get group ID
     */
    get id(): number {
        return this.data?.id || 0
    }

    /**
     * Get group description
     */
    get description(): string {
        return this.data?.description || ''
    }

    /**
     * Get group access level
     */
    get accessLevel(): UserAccessLevel {
        return this.data?.accessLevel ?? UserAccessLevel.guest
    }

    /**
     * Get group permissions
     */
    get permissions(): IGroupPermissions | null {
        return this.data?.permissions || null
    }

    /**
     * Get group members
     */
    get members(): string[] {
        return this.data?.members || []
    }

    /**
     * Check if group exists
     */
    exists(): boolean {
        return this.data !== null
    }

    /**
     * Add member to group
     */
    @Transaction()
    addMember(handle: string): boolean {
        if (!this.data) return false
        if (this.data.members.includes(handle.toLowerCase())) return false

        this.data.members.push(handle.toLowerCase())
        return true
    }

    /**
     * Remove member from group
     */
    @Transaction()
    removeMember(handle: string): boolean {
        if (!this.data) return false

        const index = this.data.members.indexOf(handle.toLowerCase())
        if (index === -1) return false

        this.data.members.splice(index, 1)
        return true
    }

    /**
     * Check if user is member
     */
    hasMember(handle: string): boolean {
        return this.data?.members.includes(handle.toLowerCase()) || false
    }

    /**
     * Get member count
     */
    memberCount(): number {
        return this.data?.members.length || 0
    }

    /**
     * Check permission
     */
    hasPermission(permission: keyof IGroupPermissions): boolean {
        if (!this.data?.permissions) return false
        const value = this.data.permissions[permission]
        return typeof value === 'boolean' ? value : false
    }

    /**
     * Set permission
     */
    @Transaction()
    setPermission(permission: keyof IGroupPermissions, value: boolean | number): boolean {
        if (!this.data || !this.data.permissions) return false
        this.data.permissions[permission] = value
        return true
    }

    /**
     * Update group data
     */
    @Transaction()
    update(updates: Partial<IGroupData>): boolean {
        if (!this.data) return false

        const { id, name, ...safeUpdates } = updates
        Object.assign(this.data, safeUpdates)
        return true
    }

    /**
     * Delete group
     */
    delete(): boolean {
        if (!this.data) return false
        const result = this.db.delete(this.data.name)
        if (result) {
            this.data = null
        }
        return result
    }

    /**
     * Get raw group data
     */
    getRawData(): IGroupData | null {
        return this.data ? { ...this.data } : null
    }
}

/**
 * Group list utilities
 */
export class IQGroupList {
    private db: IGroupDatabase

    constructor() {
        this.db = getGroupDatabase()
    }

    /**
     * Get all groups
     */
    all(): IGroupData[] {
        return this.db.list()
    }

    /**
     * Get group count
     */
    count(): number {
        return this.db.list().length
    }

    /**
     * Find group by name
     */
    findByName(name: string): IQGroup | null {
        if (this.db.exists(name)) {
            return new IQGroup(name)
        }
        return null
    }

    /**
     * Get groups by access level
     */
    byAccessLevel(level: UserAccessLevel): IGroupData[] {
        return this.db.list().filter(g => g.accessLevel === level)
    }

    /**
     * Get groups for a user
     */
    forUser(handle: string): IGroupData[] {
        const lowerHandle = handle.toLowerCase()
        return this.db.list().filter(g => g.members.includes(lowerHandle))
    }
}
