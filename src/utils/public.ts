export const getOS = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'iOS';
  } else if (/android/i.test(userAgent)) {
    return 'Android';
  }
  return 'Other';
}

export const getBrowser = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  switch (true) {
    case /chrome/i.test(userAgent) && !/edge|opr|brave/.test(userAgent):
      return "Chrome";

    case /^((?!chrome|android).)*safari/i.test(userAgent):
      return "Safari";

    case /firefox/i.test(userAgent):
      return "Firefox";

    case /edg/i.test(userAgent):
      return "Edge";

    case /opr|opera/i.test(userAgent):
      return "Opera";

    case /brave/i.test(userAgent):
      return "Brave";

    default:
      return "Other";
  }
};

