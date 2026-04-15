function finalPrices(prices: number[]): number[] {
    const len = prices.length;

    for ( let i = 0 ; i < len; i++ ) {
        let disc = 0;
        for ( let j = i+1; j < len; j++ ) {
            if ( prices[i] >= prices[j] ) {
                disc = prices[j];
                break;
            }
        }
        prices[i] -= disc;
    }
    return prices;
};
