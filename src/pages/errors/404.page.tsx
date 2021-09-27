import { useTranslation } from "react-i18next";
import { PageModel } from "../types";

const _404: PageModel = {
  title: (title: string) => {
    return title;
  },
  component: function Page404() {
    const { t } = useTranslation();
    return <div>404 - {t("not found")}</div>;
  },
  path: "/404",
  routeProps: {
    exact: true,
  },
  public: true,
};

export default _404;
