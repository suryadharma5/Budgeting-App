// Local storages
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}