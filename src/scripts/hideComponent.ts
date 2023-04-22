import isBefore from "date-fns/isBefore";

const releaseTimestamp = new Date("2023-05-01T22:00:00Z");
export function hideComponent(id: string, hideClass: string) {
	function checkTicketStart() {
		if (!isBefore(new Date(), releaseTimestamp)) {
			const ticketSale: HTMLSpanElement | null = document.getElementById(id);
			ticketSale?.classList?.remove(hideClass);
			clearInterval(intervalId);
		}
	}
	const intervalId = setInterval(checkTicketStart, 1000);
	checkTicketStart();
}

export function showComponentTilDate(id: string, hideClass: string) {
	function checkTicketStart() {
		if (!isBefore(new Date(), releaseTimestamp)) {
			const ticketSale: HTMLSpanElement | null = document.getElementById(id);
			ticketSale?.classList?.add(hideClass);
			clearInterval(intervalId);
		}
	}
	const intervalId = setInterval(checkTicketStart, 1000);

	checkTicketStart();
}
