import PageLayout from "@/layouts/PageLayout";

export const NotFoundContainer = () => {
  return (
    <>
      <PageLayout>
        <div className="mt-48 flex  w-full justify-center">
          <span className="text-warning-main text-3xl font-semibold">page not found | 404</span>
        </div>
      </PageLayout>
    </>
  );
};
