export const scrollToTopAfterPageRender = () => {
  const scrollStep = -window.scrollY / (250 / 15);
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
  return () => clearInterval(scrollInterval);
};
