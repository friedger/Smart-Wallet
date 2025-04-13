import axios from "axios";

export async function getRates() {
    const response = (await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')).data;
    const formattedData = response.reduce((acc, item) => {
        acc[item.symbol] = item;
        return acc;
    }, {});
    return formattedData;
}