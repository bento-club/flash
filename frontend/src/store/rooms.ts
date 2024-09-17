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

export default function useRoomStore() {
    const { rooms } = toRefs(roomsState)

    return {
        rooms,
    }
}
