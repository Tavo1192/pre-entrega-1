import products from "../Data/data";

function getItems() {
    return new Promise((resolve) => {
    setTimeout(() => {
            resolve(products);
        }, 2000);
    });
}

export function getSingleItem() {
    return new Promise((resolve) => {
    setTimeout(() => {
            resolve(products[5]);
        }, 2000);
    });
}
export default getItems;