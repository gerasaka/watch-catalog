export function formatPrice(price: number) {
  return new Intl.NumberFormat('de-DE').format(price);
}
