export function saveToLocalStorage(products: Object) {
    localStorage.setItem('products', JSON.stringify(products));
}
  
export function getFromLocalStorage() {
    const data: any = localStorage.getItem("products");
    return JSON.parse(data);
}


