import React, { useState } from "react";
import { startsWith } from "@/helpers/string.helper";
import { Container, Input, Item, Group } from "./styles";

interface AutocompleteProps {
  items: any[];
  labelKey: string;
  onSelect: (item: any) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = (props) => {
  const { items, labelKey, onSelect } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [showGroup, setShowGroup] = useState(false);

  const filteredItems = items.filter(({ nome }) =>
    startsWith(nome, searchTerm)
  );

  const onSearchTermChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    setSearchTerm(value);
    setShowGroup(!!value);
  };

  const handleSelect = (item: any) => {
    setSearchTerm(item[labelKey]);
    onSelect(item);
    setShowGroup(false);
  };

  const onBlur = () => {
    setTimeout(() => setShowGroup(false), 250);
  };

  return (
    <Container>
      <Input
        value={searchTerm}
        onChange={onSearchTermChange}
        onFocus={() => setShowGroup(true)}
        onBlur={onBlur}
      />
      <Group style={{ display: showGroup ? "flex" : "none" }}>
        {filteredItems.map((item, index) => (
          <Item id="option" key={index} onClick={() => handleSelect(item)}>
            {item[labelKey]}
          </Item>
        ))}
      </Group>
    </Container>
  );
};

export default Autocomplete;
