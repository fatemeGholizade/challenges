export const getDomain = () => {
  const hostname = window.location.hostname;

  if (hostname === "localhost") {
    return "localhost";
  }

  // const firstDotIndex = hostname.indexOf(".");
  // const secondDotIndex = hostname.indexOf(".", firstDotIndex + 1);

  // if (secondDotIndex > 0) {
  //   return hostname.slice(firstDotIndex);
  // }

  return hostname;
};
