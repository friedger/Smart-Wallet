import axios from "axios";

export async function getRates() {
    const response = (await axios.get('https://api.binance.com/api/v3/ticker/price')).data;
    const formattedData = response.reduce((acc, item) => {
        acc[item.symbol] = item;
        return acc;
    }, {});
    return formattedData;
}