export function formatNumber(number: number | string) {
	return Number.parseFloat(number.toString()).toLocaleString();
}
