import { TodoListContainer} from "@/containers";
import PageLayout from "@/layouts/PageLayout.tsx";

const routerList = [
  {
    path: "/",
    component: (
      <PageLayout>
        <TodoListContainer />
      </PageLayout>
    ),
    isPrivate: true,
  }
];

export default routerList;
