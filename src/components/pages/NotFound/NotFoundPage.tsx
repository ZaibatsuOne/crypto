import LiveAuction from "src/components/layout/LiveAuction/LiveAuction";
import Title from "src/components/ui/title/Title";
import { FC } from "react";

const NotFoundPage: FC = () => {
  return (
    <section className="flex flex-col gap-32">
      <header className="text-center">
        <Title title="К сожалению, мы не смогли найти никаких результатов для этого поиска." />
      </header>
      <LiveAuction />
    </section>
  );
};

export default NotFoundPage;
