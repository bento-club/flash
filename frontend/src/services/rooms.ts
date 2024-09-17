import {
    getAllRooms as getAllRoomsAPI,
    createRoom as createRoomAPI,
    type CreateRoomParams,
} from "#src/api/rooms"
import useRoomStore from "#src/store/rooms"

export default function useRoomsService() {
    const { rooms } = useRoomStore()

    async function getAllRooms() {
        const res = await getAllRoomsAPI()

        if (res instanceof Error) {
            return res
        }

        rooms.value = res.data
    }

    async function createRoom(params: CreateRoomParams) {
        const res = await createRoomAPI(params)

        if (res instanceof Error) {
            return res
        }

        rooms.value.unshift(res.data)

        return res
    }

    return {
        getAllRooms,
        createRoom,
    }
}
