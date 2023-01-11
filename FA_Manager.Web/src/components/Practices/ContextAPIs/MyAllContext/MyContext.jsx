import { createContext } from "react";

export let MyContext = createContext();
export let MyProvider = MyContext.Provider;
export let MyConsumer = MyContext.Consumer;
