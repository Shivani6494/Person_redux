export const manageState = (oldState,newObject) => {
    return {
        ...oldState,...newObject
    }
}