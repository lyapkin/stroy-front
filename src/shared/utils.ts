export const isNumber = (page: string | null): boolean => {
  return page && !isNaN(Number(page)) ? true : false;
};

export const debounce = (fn: () => void, ms: number) => {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
      fn();
    }, ms);
  };
};

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

export default function getCookie(name: string) {
  let cookieValue = "";
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

export const generateQueryKey = (searchParams: URLSearchParams) => {
  return Object.fromEntries(searchParams.entries());
};
