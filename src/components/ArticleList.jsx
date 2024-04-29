import React from 'react'
import Article from "./Article";

function ArticleList({posts}) {
    const rows = posts.map(value => {
        return <Article key={value.id} title={value.title} date={value.date} preview={value.preview}/>
    })
  return (
    <main>
        {rows}
    </main>
  )
}

export default ArticleList;