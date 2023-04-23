export const getDiscountedPricePercentgae = (original_price, current_price) => {
    const discount = ((original_price - current_price) / original_price) * 100;
    return discount.toFixed(2);
}