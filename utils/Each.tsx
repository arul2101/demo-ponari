import { Children, FC } from "react";

type EachProps<T, S> = {
  render: (item: T, index: S) => React.ReactNode;
  of: T[];
};

const Each: FC<EachProps<any, number>> = ({ render, of }) => {
  return Children.toArray(of.map((item, index) => render(item, index)));
};

export default Each;
