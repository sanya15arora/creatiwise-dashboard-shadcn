import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ArticleType } from "@/types/article";

interface ArticlesTabsProps {
    selectedTab: ArticleType;
    onChange: (tab: ArticleType) => void;
}

const tabOptions: ArticleType[] = ["generated", "published", "scheduled", "archived"];

const ArticlesTabs: React.FC<ArticlesTabsProps> = ({ selectedTab, onChange }) => {
    return (
        <Tabs
            value={selectedTab}
            onValueChange={(value) => onChange(value as ArticleType)}
            className="mb-6 bg-white-500"
            aria-label="Article categories"
        >
            <TabsList className="flex flex-wrap gap-2 w-full justify-center lg:justify-start">
                {tabOptions.map((tab) => (
                    <TabsTrigger
                        key={tab}
                        value={tab}
                        className="text-sm w-1/3 md:w-auto text-center  data-[state=active]:bg-blue-600 data-[state=active]:text-white"

                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)} Articles
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
};

export default ArticlesTabs;
