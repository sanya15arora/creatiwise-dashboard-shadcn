import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import type { Article } from "@/types/article";

type SortDirection = "ascending" | "descending" | null;
type SortKey = keyof Article | null;

interface ArticlesTableProps {
  articles: Article[];
  selectedArticles: number[];
  onSelectAll: (checked: boolean) => void;
  onSelectArticle: (id: number, checked: boolean) => void;
  sortConfig: { key: SortKey; direction: SortDirection };
  onSort: (key: keyof Article) => void;
}

const ArticlesTable: React.FC<ArticlesTableProps> = ({
  articles,
  selectedArticles,
  onSelectAll,
  onSelectArticle,
  sortConfig,
  onSort,
}) => {
  const isAllSelected = articles.length > 0 && selectedArticles.length === articles.length;

  return (
    <div className="overflow-x-auto">
      <Table className="w-full min-w-[600px]">
        <TableHeader className="sticky top-0 z-10 bg-muted">
          <TableRow className="bg-gray-50">
            <TableHead className="w-12">
              <Checkbox
                checked={isAllSelected}
                onCheckedChange={onSelectAll}
                aria-label="Select all"
              />
            </TableHead>
            <TableHead
              className="cursor-pointer min-w-[150px]"
              onClick={() => onSort("title")}
            >
              Article Title
              {sortConfig.key === "title" && (
                <span className="ml-1">{sortConfig.direction === "ascending" ? "↑" : "↓"}</span>
              )}
            </TableHead>
            <TableHead
              className="cursor-pointer min-w-[130px]"
              onClick={() => onSort("keyword")}
            >
              Keyword [Traffic]
              {sortConfig.key === "keyword" && (
                <span className="ml-1">{sortConfig.direction === "ascending" ? "↑" : "↓"}</span>
              )}
            </TableHead>
            <TableHead
              className="text-right cursor-pointer min-w-[80px]"
              onClick={() => onSort("words")}
            >
              Words
              {sortConfig.key === "words" && (
                <span className="ml-1">{sortConfig.direction === "ascending" ? "↑" : "↓"}</span>
              )}
            </TableHead>
            <TableHead
              className="text-right cursor-pointer min-w-[110px]"
              onClick={() => onSort("createdOn")}
            >
              Created On
              {sortConfig.key === "createdOn" && (
                <span className="ml-1">{sortConfig.direction === "ascending" ? "↑" : "↓"}</span>
              )}
            </TableHead>
            <TableHead className="text-center min-w-[80px]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.id} className="hover:bg-gray-50">
              <TableCell>
                <Checkbox
                  checked={selectedArticles.includes(article.id)}
                  onCheckedChange={(checked) =>
                    onSelectArticle(article.id, checked === true)
                  }
                  aria-label={`Select ${article.title}`}
                />
              </TableCell>
              <TableCell className="font-medium whitespace-normal break-words w-md lg:w-lg">
                {article.title}
              </TableCell>
              <TableCell className="text-gray-600 whitespace-normal break-words w-xs lg:w-md">
                {article.keyword}
              </TableCell>
              <TableCell className="text-right min-w-[80px]">{article.words}</TableCell>
              <TableCell className="text-right whitespace-nowrap min-w-[110px]">{article.createdOn}</TableCell>
              <TableCell className="text-center min-w-[80px]">
                <Button variant="outline" size="sm" className="text-white bg-blue-500 hover:bg-blue-50 hover:text-blue-500 ">
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ArticlesTable;
