import products from "../Data/data";

function getItems() {
    return new Promise((resolve) => {
    setTimeout(() => {
            resolve(products);
        }, 2000);
    });
}

export function getSigleItems() {
    return new Promise((resolve) => {
    setTimeout(() => {
            resolve(products[2]);
        }, 2000);
    });
}
export default getItems;