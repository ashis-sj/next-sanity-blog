import React, { createContext, ReactNode } from "react";
import { createClient, SanityClient } from "next-sanity";

type Props = {
  children: ReactNode;
};

export const SanityContex = createContext<SanityClient | null>(null);

export const client = createClient({
  projectId: "szjqs6jm",
  dataset: "production",
  apiVersion: "2023-02-16",
  useCdn: false,
});

const SanityContextProvider: React.FC<Props> = ({ children }) => {
  return (
    <SanityContex.Provider value={client}>{children}</SanityContex.Provider>
  );
};
export default SanityContextProvider;
