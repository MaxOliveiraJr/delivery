export type getTanantResponse = {
  name: string;
  mainColor: string;
  secodColor: string;
};

export const useApi = () => ({
  getTanant: (tanantSlug: string): boolean | getTanantResponse => {
    switch (tanantSlug) {
      case "b7burguer":
        return {
          name: "B7Burguer",
          mainColor: "#ff0000",
          secodColor: "#00ff00",
        };
        break;
      case "b7pizza":
        return {
          name: "B7Burguer",
          mainColor: "#0000ff",
          secodColor: "#00ff00",
        };
        break;
      default:
        return false;
    }
  },
});
