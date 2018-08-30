export const setTodosToLocalStorage = (key, state) => {
  return localStorage.setItem(`${key}`, JSON.stringify(state));
}

export const getTodosFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(`${key}`));
}