export const unmaskNumber = (value: string): string => {
  return value.replace(/\D/g, "");
};

export const formatPhoneNumber = (number: string) => {
  const cleanValue = unmaskNumber(number);

  let result = "";

  if (number[0] === "7" || number[0] === "8") {
    result = "+7" + cleanValue.slice(1);
  } else if (number[0] !== "+" && number !== "") {
    result = "+7" + cleanValue;
  } else if (number[0] === "+") {
    result = "+" + cleanValue;
  }

  if (result.length > 2 && result.startsWith("+7")) {
    result = result.slice(0, 2) + " (" + result.slice(2);
  }
  if (result.length > 7 && result.startsWith("+7")) {
    result = result.slice(0, 7) + ") " + result.slice(7);
  }
  if (result.length > 12 && result.startsWith("+7")) {
    result = result.slice(0, 12) + "-" + result.slice(12);
  }
  if (result.length > 15 && result.startsWith("+7")) {
    result = result.slice(0, 15) + "-" + result.slice(15);
  }

  if (result.startsWith("+7")) {
    result = result.slice(0, 18);
  } else {
    result = result.slice(0, 16);
  }
  return result;
};
