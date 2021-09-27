import { useTranslation } from "react-i18next";
import { PageModel } from "../types";

const _private: PageModel = {
  title: (title: string) => {
    return title;
  },
  component: function PrivatePage() {
    const { t } = useTranslation();
    return <div>This is private page / {t("welcome")}</div>;
  },
  path: "/private",
  routeProps: {
    exact: true,
  },
  public: false,
  redirect: false,
};

export default _private;
