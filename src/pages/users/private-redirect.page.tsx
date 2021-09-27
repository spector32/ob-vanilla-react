import { useTranslation } from "react-i18next";
import { PageModel } from "../types";

const _private_redirect: PageModel = {
  title: (title: string) => {
    return title;
  },
  component: function PrivatePageWithgRedirect() {
    const { t } = useTranslation();
    return <div>This is private page ||| {t("welcome")}</div>;
  },
  path: "/private-redirect",
  routeProps: {
    exact: true,
  },
  public: false,
  redirect: true,
};

export default _private_redirect;
