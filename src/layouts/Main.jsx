import React, { useCallback } from "react";

import Model from "../components/Model";
import Table from "../components/Table";

const Main = () => {
  const [open, setOpen] = React.useState(false);

  // this function is used to open model after clicking on button
  const handleOpen = useCallback(() => setOpen(true), []);

  return (
    <main className="mt-20 z-0">
      <Table />
      <button
        onClick={handleOpen}
        className="bg-black text-white px-12 py-1 mt-5 ml-10 mb-16 "
      >
        Add
      </button>
      {open && <Model setOpen={setOpen} open={open} />}
    </main>
  );
};

export default Main;
