import { i18nService } from "../services";
import { resources } from "../locales";
import rootStore, { StoreProvider } from "../stores";
import router from "../router";

i18nService.init({
  resources,
  interpolation: {
    format: function (value: any, format: any, lng: string) {
      // if (value instanceof Date) return moment(value).format(format);
      return value;
    },
  },
});

export default function App() {
  return (
    <StoreProvider store={rootStore}>
      <div className="main-wrapper">{router.render()}</div>
    </StoreProvider>
  );
}
