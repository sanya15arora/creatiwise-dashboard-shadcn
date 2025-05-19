import React, { useState, useEffect, useMemo } from "react";
import type { Article, ArticleType } from "@/types/article";
import ArticlesTable from "./ArticlesTable";
import ArticlesTabs from "./ArticlesTabs";
import SearchBar from "./SearchBar";
import PaginationControls from "./PaginationControls";

interface DataTableProps {
  articles: Article[];
}

type SortDirection = "ascending" | "descending" | null;
type SortKey = keyof Article | null;

const DataTable: React.FC<DataTableProps> = ({ articles }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticles, setSelectedArticles] = useState<number[]>([]);
  const [selectedTab, setSelectedTab] = useState<ArticleType>("generated");
  const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: SortDirection }>({
    key: null,
    direction: null,
  });
  const [pageSize, setPageSize] = useState<string>("10");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSort = (key: keyof Article) => {
    let direction: SortDirection = "ascending";

    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    } else if (sortConfig.key === key && sortConfig.direction === "descending") {
      direction = null;
    }

    setSortConfig({ key, direction });
  };

  const sortedArticles = useMemo(() => {
    let sortableArticles = [...articles];

    if (sortConfig.key && sortConfig.direction) {
      sortableArticles.sort((a, b) => {
        const valueA = a[sortConfig.key as keyof Article];
        const valueB = b[sortConfig.key as keyof Article];

        if (valueA < valueB) return sortConfig.direction === "ascending" ? -1 : 1;
        if (valueA > valueB) return sortConfig.direction === "ascending" ? 1 : -1;
        return 0;
      });
    }

    return sortableArticles;
  }, [articles, sortConfig]);

  const filteredArticles = useMemo(() => {
    return sortedArticles.filter(
      (article) =>
        article.type === selectedTab &&
        (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.keyword.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [sortedArticles, selectedTab, searchTerm]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedTab, sortConfig]);

  const pageSizeNum = parseInt(pageSize, 10);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * pageSizeNum,
    currentPage * pageSizeNum
  );

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedArticles(paginatedArticles.map((article) => article.id));
    } else {
      setSelectedArticles([]);
    }
  };

  const handleSelectArticle = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedArticles((prev) => [...prev, id]);
    } else {
      setSelectedArticles((prev) => prev.filter((articleId) => articleId !== id));
    }
  };

  return (
    <div className="w-full p-4 md:p-8 bg-white rounded-lg">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">Articles</h1>

      <ArticlesTabs selectedTab={selectedTab} onChange={setSelectedTab} />

      <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />

      <ArticlesTable
        articles={paginatedArticles}
        selectedArticles={selectedArticles}
        onSelectAll={handleSelectAll}
        onSelectArticle={handleSelectArticle}
        sortConfig={sortConfig}
        onSort={handleSort}
      />

      <PaginationControls
        pageSize={pageSize}
        onPageSizeChange={(newSize) => {
          setPageSize(newSize);
          setCurrentPage(1); // reset page on page size change
        } }
        currentPage={currentPage} 
        total={paginatedArticles.length}      />
    </div>
  );
};

export default DataTable;
