import { syncWithLocalStorage } from "#src/store/utils"
import { reactive, toRefs } from "vue"

export type Room = {
    uuid: string
    name: string
    ownerId: string
    createdAt: Date
    updatedAt: Date
}

const roomsState = reactive({
    rooms: [] as Room[],
})

const ROOMS_STATE_KEY = "roomsState"

syncWithLocalStorage(
    ROOMS_STATE_KEY,
    roomsState,
    (state: Record<string, any>) => {
        const rooms = state?.rooms.map((room: Record<string, any>) => ({
            ...room,
            createdAt: new Date(room.createdAt),
            updatedAt: new Date(room.updatedAt),
        }))

        return {
            ...state,
            rooms,
        }
    },
)

export default function useRoomStore() {
    const { rooms } = toRefs(roomsState)

    return {
        rooms,
    }
}
