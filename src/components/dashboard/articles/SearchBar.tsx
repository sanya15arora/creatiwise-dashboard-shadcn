import React from "react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchTerm: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onChange }) => {
  return (
    <div className="flex justify-center mb-6 mt-14 xl:mt-2">
      <Input
        type="text"
        placeholder="Search for Title & Keywords..."
        className="max-w-lg w-full px-2"
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
