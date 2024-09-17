import { reactive, toRefs } from "vue"

export const appState = reactive({
    uuid: "",
    name: "",
    token: "",
})

export default function useAppStore() {
    const { uuid, name, token } = toRefs(appState)

    return {
        uuid,
        name,
        token,
    }
}

