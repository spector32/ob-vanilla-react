import LanguageMenu from "../components/navigation/LanguageMenu";
import MainMenu from "../components/navigation/MainMenu";
// import { withProps } from "../utils";

const _default = ({ page, ...restProps }: { page: any }) => {
  console.log("LAYOUT RENDERED");

  return (
    <div className="layout default-layout">
      <header>
        <div className="header">
          <LanguageMenu />
          <MainMenu />
        </div>
      </header>
      {page}
      <footer>
        <h4>This is default layout</h4>
      </footer>
    </div>
  );
};

export default _default;
