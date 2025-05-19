
import DataTable from '@/components/dashboard/articles/DataTable'
import  Articles  from './data.json'

const GenerateArticles = () => {
  return (
    <DataTable articles={Articles.map(article => ({
      ...article,
      type: article.type as "generated" | "published" | "scheduled" | "archived"
    }))}/>
  )
}

export default GenerateArticles

