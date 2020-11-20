export const getUsers = (state) => {
    return state.userPage.users;
}

export const getGetPageSize = (state) => {
    return state.userPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.userPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.userPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.userPage.isFetching;
}

export const getFollowingIsProgress = (state) => {
    return state.userPage.followingIsProgress;
}

