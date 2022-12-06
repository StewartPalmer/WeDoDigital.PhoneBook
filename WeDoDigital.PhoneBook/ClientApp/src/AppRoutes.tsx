import { Edit } from "./views/Edit";

import { Home } from "./views/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/Edit/:id',
    element: <Edit />
  },
  {
    path: '/Add',
    element: <Edit />
  }
];

export default AppRoutes;
