import { debounce } from "lodash"
import { isRef, watchEffect, type Reactive, type Ref } from "vue"

export function syncWithLocalStorage(
    key: string,
    state: Reactive<any> | Ref<any>,
    transform?: (savedState: Record<string, any>) => Record<string, any>,
) {
    const saved = localStorage.getItem(key)

    //? Load already saved state
    if (saved) {
        const parsed = JSON.parse(saved)
        const savedState = transform ? transform(parsed) : parsed

        for (const item in savedState) {
            state[item] = savedState[item]
        }
    }

    const throttledWrite = debounce(() => {
        localStorage.setItem(
            key,
            JSON.stringify(isRef(state) ? state.value : state),
        )
    }, 500)

    watchEffect(throttledWrite)
}
