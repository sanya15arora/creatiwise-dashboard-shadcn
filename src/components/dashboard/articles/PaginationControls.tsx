import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PaginationControlsProps {
  pageSize: string;
  onPageSizeChange: (value: string) => void;
  total: number;
  currentPage: number;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({ pageSize, onPageSizeChange, total }) => {
  return (
    <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-sm gap-3 sm:gap-0">
      <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
        <span>Total <b> {total} </b>  Articles | Show</span>
        <Select value={pageSize} onValueChange={onPageSizeChange}>
          <SelectTrigger className="w-20 max-h-8" style={{ border: '1px solid black' }}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="25">25</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
        <span>entries per page</span>
      </div>
      <div className="text-gray-600">1 / 1</div>
    </div>
  );
};

export default PaginationControls;
