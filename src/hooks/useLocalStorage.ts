import { useEffect, useState } from "react";
import type { TODO_TYPE } from "../app/types";

export default function useLocalStorage(
  key: string,
  initialValue: TODO_TYPE[],
) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);

    if (jsonValue === null) return initialValue;
    else return JSON.parse(jsonValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [TODO_TYPE[], typeof setValue];
}
