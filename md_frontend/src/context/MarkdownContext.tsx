import { ReactNode, createContext, useMemo, useState } from "react";

export interface MDPayload {
  mdString: string;
  unparsedString: string;
}
interface IDataContext {
  children?: ReactNode;
}

const MarkdownContext = createContext(undefined);

const MarkdownProvider = ({ children }: IDataContext) => {
  const [stringPayload, updateStringsPayload] = useState<MDPayload>({
    mdString: "",
    unparsedString: "",
  });
  console.log(stringPayload);
  const memoizedContext = useMemo(
    () => ({
      stringPayload,
      updateStringsPayload,
    }),
    [stringPayload, updateStringsPayload]
  );

  return (
    <MarkdownContext.Provider value={memoizedContext}>
      {children}
    </MarkdownContext.Provider>
  );
};

export { MarkdownContext, MarkdownProvider };
