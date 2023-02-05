export default {
    SET_SOME_STATE(state, payload) {
        Object.keys(payload).forEach(key => {
            if (typeof payload[key] === 'object') {
                state[key] = this.$cloneDeep(payload[key])
            } else {
                state[key] = payload[key]
            }
        })
    },
}