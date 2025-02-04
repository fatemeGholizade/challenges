import { TodoListContainer } from "@/containers";
import PageLayout from "@/layouts/PageLayout.tsx";
// can have as many items as needed for pages
const routerList = [
  {
    path: "/",
    component: (
      <PageLayout>
        <TodoListContainer />
      </PageLayout>
    ),
    isPrivate: true,
  },
];

export default routerList;
