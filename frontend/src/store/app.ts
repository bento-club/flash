import { syncWithLocalStorage } from "#src/store/utils"
import { reactive, toRefs } from "vue"

export const appState = reactive({
    uuid: "",
    name: "",
    token: "",
})

const APP_STATE_KEY = "appState"

syncWithLocalStorage(APP_STATE_KEY, appState)

export default function useAppStore() {
    const { uuid, name, token } = toRefs(appState)

    return {
        uuid,
        name,
        token,
    }
}
