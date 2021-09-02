export const getStaticRoute = (type: string): string | boolean => {
  switch (type) {
    case "homePage":
      return "";
    case "infoPage":
      return "info";
    case "releasesPage":
      return "releases";
    case "shopPage":
      return "shop";
    default:
      return false;
  }
};

export const getDynamicRoute = (type: string): string | boolean => {
  switch (type) {
    case "product":
      return "products";
    default:
      return false;
  }
};
