export const getOSAndBrowser = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
  let os = "Other";
  if (/android/i.test(userAgent)) {
    os = "Android";
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    os = "iOS";
  }

  

  
  let browser = "Other";
  if (os === "iOS") {
    if (/CriOS/i.test(userAgent)) {
      browser = "Chrome";  
    } else if (/Safari/i.test(userAgent) && !/CriOS/i.test(userAgent)) {
      browser = "Safari"; 
    }
  } else if (os === "Android") {
    if (/chrome/i.test(userAgent) && !/edge|opr|brave/i.test(userAgent)) {
      browser = "Chrome";
    } else if (/firefox/i.test(userAgent)) {
      browser = "Firefox";
    } else if (/edg/i.test(userAgent)) {
      browser = "Edge";
    } else if (/opr|opera/i.test(userAgent)) {
      browser = "Opera";
    } else if (/brave/i.test(userAgent)) {
      browser = "Brave";
    }
  }
  const isDesktop = !/Mobi|Android|iPhone|iPad/.test(userAgent);

  return { os, browser, isDesktop, userAgent };
};