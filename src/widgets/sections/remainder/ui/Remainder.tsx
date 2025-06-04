import s from "./styles.module.css";
import cn from "classnames";
import { Suspense } from "react";

import RemainderContent from "./RemainderLoader";
import RemainderSkeleton from "./RemainderSkeleton";

const Remainder = () => {
  return (
    <section className={cn(s.remainderSection, "section")}>
      <div className="container">
        <div className={cn(s.remainder, "section-flex")}>
          <h2 className={cn(s.remainder__title, "section-title")}>
            Актуальный <b>складской остаток</b>
          </h2>
          <div className={s.remainder__content}>
            <Suspense fallback={<RemainderSkeleton />}>
              <RemainderContent />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Remainder;
