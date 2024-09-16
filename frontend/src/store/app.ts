import { reactive, toRefs } from "vue"

const state = reactive({
    uuid: "",
    name: "",
    token: "",
})

export default function useAppStore() {
    const { uuid, name, token } = toRefs(state)

    return {
        uuid,
        name,
        token,
    }
}
