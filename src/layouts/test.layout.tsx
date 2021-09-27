import LanguageMenu from "../components/navigation/LanguageMenu";
import MainMenu from "../components/navigation/MainMenu";

const _test = ({ page, ...restProps }: { page: any }) => {
  // const PageComponent = page;

  // console.log("restProps: ", restProps, PageComponent);

  return (
    <div className="layout test-layout">
      <header>
        <div className="header">
          <LanguageMenu />
          <MainMenu />
        </div>
      </header>
      {page}
      {/* <PageComponent {...restProps} />
       */}
      <footer>
        <h4>This is test layout</h4>
      </footer>
    </div>
  );
};

export default _test;
