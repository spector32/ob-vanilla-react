import { useTranslation } from "react-i18next";
import { PageModel } from "../types";

const _403: PageModel = {
  title: (title: string) => {
    return title;
  },
  component: function Page403() {
    const { t } = useTranslation();
    return <div>403 - {t("not allowed")}</div>;
  },
  path: "/403",
  routeProps: {
    exact: true,
  },
  public: true,
};

export default _403;
