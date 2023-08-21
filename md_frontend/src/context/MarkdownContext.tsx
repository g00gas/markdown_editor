import { ReactNode, createContext, useContext, useMemo, useState } from "react";

export interface MDPayload {
  mdString: string;
  unparsedString: string;
}
interface IDataContext {
  children?: ReactNode;
}

const MarkdownContext = createContext<MDPayload | undefined>(undefined);

const MarkdownProvider = ({ children }: IDataContext) => {
  const [stringPayload, updateStringsPayload] = useState<MDPayload>({
    mdString: "",
    unparsedString: "",
  });
  const memoizedContext = useMemo<MDPayload>(
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
