import { useState } from "react";
import { NewItemForm } from "./NewItemForm";
import { AddItemButton } from "./StyledComponents";

type AddNewItemProps = {
  handleAdd(text: string): void;
  btnText: string;
  dark?: boolean;
};

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const { btnText, handleAdd, dark } = props;

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          handleAdd(text);
          setShowForm(false);
        }}
      />
    );
  }
  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {btnText}
    </AddItemButton>
  );
};
