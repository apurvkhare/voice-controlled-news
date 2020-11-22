import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'
import { Article } from './components/NewsCard/NewsCard'

const alanKey = process.env.REACT_APP_ALAN_API_KEY

export interface onCommandArgs {
    command: string
    articles: Array<Article>
}

function App() {
    const [newsArticles, setNewsArticle] = useState<Array<Article>>([])

    useEffect(() => {
        alanBtn({
            key: alanKey!,
            onCommand: ({ command, articles }: onCommandArgs) => {
                if (command === 'newHeadlines') {
                    console.log(articles)
                    setNewsArticle(articles)
                }
            },
        })
    }, [])
    return (
        <div>
            <h1>ALan AI New App</h1>
            <NewsCards articles={newsArticles} />
        </div>
    )
}

export default App
