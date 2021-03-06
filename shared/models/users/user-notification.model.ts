export enum UserNotificationType {
  NEW_VIDEO_FROM_SUBSCRIPTION = 1,
  NEW_COMMENT_ON_MY_VIDEO = 2,
  NEW_VIDEO_ABUSE_FOR_MODERATORS = 3,

  BLACKLIST_ON_MY_VIDEO = 4,
  UNBLACKLIST_ON_MY_VIDEO = 5,

  MY_VIDEO_PUBLISHED = 6,

  MY_VIDEO_IMPORT_SUCCESS = 7,
  MY_VIDEO_IMPORT_ERROR = 8,

  NEW_USER_REGISTRATION = 9,
  NEW_FOLLOW = 10,
  COMMENT_MENTION = 11
}

export interface VideoInfo {
  id: number
  uuid: string
  name: string
}

export interface ActorInfo {
  id: number
  displayName: string
  name: string
  avatar?: {
    path: string
  }
}

export interface UserNotification {
  id: number
  type: UserNotificationType
  read: boolean

  video?: VideoInfo & {
    channel: ActorInfo
  }

  videoImport?: {
    id: number
    video?: VideoInfo
    torrentName?: string
    magnetUri?: string
    targetUrl?: string
  }

  comment?: {
    id: number
    threadId: number
    account: ActorInfo
    video: VideoInfo
  }

  videoAbuse?: {
    id: number
    video: VideoInfo
  }

  videoBlacklist?: {
    id: number
    video: VideoInfo
  }

  account?: ActorInfo

  actorFollow?: {
    id: number
    follower: ActorInfo
    following: {
      type: 'account' | 'channel'
      name: string
      displayName: string
    }
  }

  createdAt: string
  updatedAt: string
}
