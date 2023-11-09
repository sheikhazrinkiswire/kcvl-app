export function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

export function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join("");
}

export function Loading() {
  return <i className="pi pi-spin pi-spinner" style={{ fontSize: "2rem" }}></i>;
}
