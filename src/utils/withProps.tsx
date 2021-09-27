import React, { ReactElement } from "react";

// export function withProps<P extends React.ComponentProps<any>, C extends React.ComponentType<P>>(
//   component: C & React.ComponentType<P>,
// ): React.ComponentClass<Omit<P, keyof React.ComponentProps<any>>>;

// export default function withProps<P extends React.ComponentProps<any>, C extends React.ComponentType<P>>(
//   component: C & React.ComponentType<P>,
// )

export default function withProps(
  Component: React.FunctionComponent | any,
  props: any
): ReactElement | null {
  if (Component) return <Component {...props} />;
  return null;
}
