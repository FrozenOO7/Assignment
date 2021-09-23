export const getUser = (users = [], action) => {
    switch (action.type) {
        case 'GITHUB_USERS':
            return { ...users, users: [action.playload] }
        default:
            return users;
    }
}