import { getStoredCart } from "../utilities/fakeDB";

const jobsDetailsLoader = async () => {
    const loadedDetails = await fetch('featured.json')
    const details = await loadedDetails.json()

    const storedCart = getStoredCart()
    console.log(storedCart);
    const savedCart = []
    for (const id in storedCart) {
        const addedDetails = details.find(jd => jd.id == id)
        if (addedDetails) {
            const quantity = storedCart[id]
            addedDetails.quantity = quantity
            savedCart.push(addedDetails)
        }
    }
    return savedCart
};

export default jobsDetailsLoader;