// import FormWithRefs from "./Forms/Components/FormWithRefs";
// import FormWithUseState from "./Forms/Components/FormWithUseState";
// import FormWithReactHookForm from "./Forms/Components/FormWithReactHookForm";
// import ExpenseTrackerProject from "./ExpenseTracker/Components/ExpenseTrackerProject";

import { Input } from "antd";
import { useEffect, useRef } from "react";

export default function App() {
  const inputRef = useRef<any>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    document.title = "React Playground";
  }, []);

  return <Input ref={inputRef} type="text" />;
}
