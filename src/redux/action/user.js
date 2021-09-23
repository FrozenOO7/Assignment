export const getUser = (data) => {
    return {
        type: 'GITHUB_USERS',
        playload: data
    }
}