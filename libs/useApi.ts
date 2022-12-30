import { Tenant } from "../types/Tenant";

export const useApi = () => ({
  getTenant: (tenantSlug: string): boolean | Tenant => {
    switch (tenantSlug) {
      case "b7burguer":
        return {
          slug: "b7Burguer",
          name: "B7Burguer",
          mainColor: "#FB9400",
          secondColor: "#FFF9F2",
        };
        break;
      case "b7pizza":
        return {
          slug: "b7piiza",
          name: "B7Pizza",
          mainColor: "#0000ff",
          secondColor: "#00ff00",
        };
        break;
      default:
        return false;
    }
  },
});
