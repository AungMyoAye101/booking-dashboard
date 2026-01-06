export const priceFormater = (amount: number) => {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "usd",
        minimumFractionDigits: 0, // Ensures at least 0 decimal places (removes '.00')
        maximumFractionDigits: 0
    }).format(amount);


}