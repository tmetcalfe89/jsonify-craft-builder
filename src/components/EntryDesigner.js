import React from "react";
import AutoForm from "./AutoForm";
import { toSnakeCase } from "../util/stringUtil";

const formTypes = {
  item: {
    name: {
      type: "text",
      label: "Item Name",
      note: "This will automatically be converted to snake_case",
      process: toSnakeCase,
    },
  },
  block: {
    name: {
      type: "text",
      label: "Block Name",
      note: "This will automatically be converted to snake_case",
      process: toSnakeCase,
    },
  },
};

function EntryDesigner({ entry = {}, updateEntry }) {
  return (
    <AutoForm
      description={formTypes[entry.type]}
      data={entry}
      setData={updateEntry}
    />
  );
}

export default EntryDesigner;
