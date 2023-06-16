import { FC } from "react";
import LiveAuction from "src/components/layout/LiveAuction/LiveAuction";
import Button from "src/components/ui/Buttons/Button";
import Title from "src/components/ui/title/Title";

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
