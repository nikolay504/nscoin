let lastUpdate = {}; // Coin bazında son güncelleme zamanlarını tutar

ws.onmessage = function (event) {
    const data = JSON.parse(event.data);
    const symbol = data.stream.split('@')[0];
    const price = parseFloat(data.data.p);
    const now = Date.now();

    // Her coin için en fazla 5 saniyede bir güncelle
    if (!lastUpdate[symbol] || now - lastUpdate[symbol] > 5000) {
        const coinCard = document.getElementById(symbol);
        if (coinCard) {
            const priceElement = coinCard.querySelector('.price');
            priceElement.textContent = `Fiyat: $${price.toFixed(2)}`;
        }
        lastUpdate[symbol] = now;
    }
};
const coins = ['btcusdt', 'ethusdt', 'dogeusdt', 'bnbusdt', 'adausdt', 'xrpusdt'];
if (price > previousPrice) {
    priceElement.style.color = 'green';
} else if (price < previousPrice) {
    priceElement.style.color = 'red';
} else {
    priceElement.style.color = 'black';
}
