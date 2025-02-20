import { BrowserRouter, Route, Routes } from "react-router-dom";

import routerList from "@/config/router";
import { NotFoundContainer } from "@/containers/404";
export const RouterProvider = () => {
  // our main router that can have more items if they are declared in routersList
  return (
    <BrowserRouter basename="/challenges">
      <Routes>
        {routerList.map((router) => (
          <Route key={router.path} path={router.path} element={router.component} />
        ))}
        <Route path="*" element={<NotFoundContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
