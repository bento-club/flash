import { identify as identifyAPI } from "#src/api/users"
import { uuid } from "#src/lib/auth"
import useAppStore from "#src/store/app"

export function useUserService() {
    async function identify(name: string) {
        const appStore = useAppStore()

        const res = await identifyAPI({
            uuid: uuid(),
            name,
        })

        if (res instanceof Error) {
            return res
        }

        if (res.data.token) {
            appStore.token.value = res.data.token || ""
        }

        appStore.name.value = res.data.name
        appStore.uuid.value = res.data.uuid

        return res
    }

    return {
        identify,
    }
}
