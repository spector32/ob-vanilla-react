import React, { Suspense } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import layouts from "./layouts";
import pages, { _404, _403 } from "./pages";
import { PageModel } from "./pages/types";
import { withProps } from "./utils";

type RouteModel = PageModel & {
  render?: (props: any) => any;
  optionalThing?: undefined;
  _isLayoutSet?: boolean;
};

const SuspenseFallbackComponent = () => <div>Loading...</div>;

const routeRenderer: any = (
  route: RouteModel
): React.FunctionComponent | undefined => {
  const layoutKey: string = route?.layout || "default";
  if (layoutKey in layouts) {
    const LayoutWrapper = layouts[layoutKey];
    const PageComponent = withProps(
      route?.component ? withRouter(route.component) : React.Fragment,
      {
        ...route?.componentProps,
      }
    );
    return (props) => <LayoutWrapper {...props} page={PageComponent} />;
  }
  return undefined;
};

const routeWithLayout = (route: RouteModel) => {
  const layoutKey: string = route?.layout || "default";
  if (layoutKey in layouts && !route?._isLayoutSet) {
    const LayoutWrapper = layouts[layoutKey];
    // const pageComponent = route.component;

    console.log("Running times?");

    route.render = (props) => {
      console.log("ran? @renderer");
      return <LayoutWrapper {...props} page={withRouter(route.component)} />;
    };
    route._isLayoutSet = true;
  }
  return route;
};

const RouteProvider = ({
  routes,
  router,
}: {
  routes: RouteModel[];
  router: Router;
}) => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route: RouteModel) => {
          // const Component = route.render;
          const Component = routeRenderer(route);

          console.log("Component: ", Component);

          // Possibly could use isLogged([...perms])
          const isLogged = false; // TODO: Check user state

          return (
            <Route key={route.path} path={route.path} {...route.routeProps}>
              {route.public || isLogged ? (
                <Suspense fallback={SuspenseFallbackComponent}>
                  {/* {route?.render &&
                    route.render({
                      ...route.componentProps,
                      setTitle: router.setDocumentTitle,
                    })} */}
                  <Component
                    {...route.componentProps}
                    setTitle={router.setDocumentTitle}
                  />
                </Suspense>
              ) : route.redirect ? (
                ({ match }) => {
                  // url || path
                  return (
                    <Redirect
                      to={`/signin${
                        match?.url && match?.url !== "/"
                          ? "?r=" + match.url
                          : ""
                      }`}
                    />
                  );
                }
              ) : (
                (function () {
                  const Component403 = routeRenderer(_403.component);
                  return <Component403 {...route.routeProps} />;
                })()
              )}
            </Route>
          );
        })}
        <Route
          key="__any__"
          path="*"
          component={routeRenderer(_404.component)}
        />
      </Switch>
    </BrowserRouter>
  );
};

class Router {
  routes: RouteModel[] = [];

  constructor(routes: RouteModel[]) {
    if (Router.validateRoutes(routes)) {
      // const routesWithLayout: any = routes.map((route: RouteModel) => {
      //   route = routeWithLayout(route);
      //   return route;
      // });
      // this.routes = routesWithLayout;
      this.routes = routes;
    }
  }

  // for testing purposes
  setDocumentTitle(title: string) {
    //
    if (document && document?.title) {
      document.title = title;
    }
  }

  static validateRoutes(routes: RouteModel[]): boolean {
    for (const route of routes) {
      if (!route?.component) {
        throw Error(`Route page "${route.path}" component is not specified!`);
      }
      if (route.layout && !(route.layout in layouts)) {
        throw Error(
          `Layout "${route.layout}" does not exist! Route page: "${route.path}"`
        );
        // return false;
      }
      // TODO: More route validation
    }
    return true;
  }

  render() {
    return <RouteProvider routes={this.routes} router={this} />;
  }
}

export default new Router(pages);
