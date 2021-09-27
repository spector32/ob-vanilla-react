import React, { ComponentType, ReactNode } from "react";
import { RouteComponentProps, StaticContext } from "react-router";

export type PageModel = {
  title?: (param: any) => string | null;
  path: string;
  routeProps?: object;
  // component: React.Component<{}, {}, any>;
  // component:
  //   | React.FunctionComponent
  //   | React.Component
  //   | ((props?: any) => ReactNode)
  //   | ComponentType<RouteComponentProps<any, StaticContext, unknown>>;
  component: any;
  componentProps?: object;
  public?: boolean;
  redirect?: boolean;
  layout?: string;
};
