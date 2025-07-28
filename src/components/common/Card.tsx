import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <article className="card">
      <div className="card-inner">{children}</div>
    </article>
  );
}
