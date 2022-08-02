export function saveToLocalStorage(name: string, data: Object) {
    localStorage.setItem(name, JSON.stringify(data));
}
  
export function getFromLocalStorage(name: string) {
    const data: any = localStorage.getItem(name);
    return JSON.parse(data);
}


