export function cc_format(value: string) {
  // Remove all non-digit characters
  let cardNumber = value.replace(/\D/g, "");

  // Add a space after every fourth digit
  cardNumber = cardNumber.replace(/(\d{4})/g, "$1 ");

  // Trim any extra whitespace
  cardNumber = cardNumber.trim();

  return cardNumber;
}

export function formatExpiryDate(dateString: string): string {
  // Remove any non-digit characters
  const cleanDate = dateString.replace(/\D/g, "");

  // Extract the month and year values from the string
  const month = cleanDate.substring(0, 2);
  const year = cleanDate.substring(2, 4);

  // Format the date string as "MM / YY"
  const formattedDate = `${month} / ${year}`;

  return formattedDate;
}
