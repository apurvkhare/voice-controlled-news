import React, { useState, useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import wordsToNumbers from 'words-to-numbers'
import NewsCards from './components/NewsCards/NewsCards'
import { Article } from './components/NewsCard/NewsCard'
import useStyles from './styles'

const alanKey = process.env.REACT_APP_ALAN_API_KEY

export interface onCommandArgs {
    command: string
    articles: Array<Article>
    number: string
}

function App() {
    const [newsArticles, setNewsArticle] = useState<Array<Article>>([])
    const [activeArticle, setActiveArticle] = useState<number>(-1)
    const classes = useStyles()

    useEffect(() => {
        alanBtn({
            key: alanKey!,
            onCommand: ({ command, articles, number }: onCommandArgs) => {
                if (command === 'newHeadlines') {
                    console.log(articles)
                    setNewsArticle(articles)
                    setActiveArticle(-1)
                } else if (command === 'highlight') {
                    setActiveArticle(prevActiveArticle => prevActiveArticle + 1)
                } else if (command === 'open') {
                    const parsedNumber =
                        number.length > 2
                            ? wordsToNumbers(number, { fuzzy: true })
                            : number
                    const article = articles[(parsedNumber! as number) - 1]

                    if (article) {
                        window.open(article.url, '_blank')
                    }
                }
            },
        })
    }, [])
    return (
        <div>
            <div className={classes.logoContainer}>
                <img
                    src='https://alan.app/voice/images/previews/preview.jpg'
                    alt='Alan Logo'
                    className={classes.alanLogo}
                />
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
            <p className={classes.footerName}>
                Designed & Developed By{' '}
                <a
                    style={{ color: 'purple' }}
                    href='https://apurvkhare.now.sh'
                    target='_blank'
                    rel='noreferrer'
                >
                    Apurv Khare
                </a>
            </p>
        </div>
    )
}

export default App
