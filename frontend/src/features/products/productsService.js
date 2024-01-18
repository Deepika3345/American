import axios from "axios"
export const getproducts = async () => {
    const response = await axios.get("http://localhost:9000/api/product")
    // console.log("product service", response.data)

    return response.data
}

