import React from "react";
export interface RouteBase {
  path: string,
  component: () => JSX.Element,
  exact?: boolean
}

