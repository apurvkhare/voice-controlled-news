import React from 'react'
import NewsCard, { Article } from '../NewsCard/NewsCard'
import useStyles from './styles'
import { Grid, Grow, Typography } from '@material-ui/core'

export interface NewsCardsProps {
    articles: Array<Article>
    activeArticle: number
}

const NewsCards: React.FC<NewsCardsProps> = ({ articles, activeArticle }) => {
    const classes = useStyles()

    const infoCards = [
        {
            color: '#00838f',
            title: 'Latest News',
            text: 'Give me the latest news',
        },
        {
            color: '#1565c0',
            title: 'News by Categories',
            info:
                'Business, Entertainment, General, Health, Science, Sports, Technology',
            text: 'Give me the latest Technology news',
        },
        {
            color: '#4527a0',
            title: 'News by Terms',
            info: 'Corona Virus, PlayStation 5, Smartphones, Narendra Modi...',
            text: "What's up with PlayStation 5",
        },
        {
            color: '#283593',
            title: 'News by Sources',
            info: 'The Hindu, Google News, The Times of India, BBC News, Buzzfeed...',
            text: 'Give me the news from The Times of India',
        },
    ]

    if (!articles.length) {
        return (
            <Grow in>
                <Grid
                    className={classes.container}
                    container
                    alignItems='stretch'
                    spacing={3}
                >
                    {infoCards &&
                        infoCards.map(infoCard => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                className={classes.infoCard}
                            >
                                <div
                                    className={classes.card}
                                    style={{ backgroundColor: infoCard.color }}
                                >
                                    <Typography variant='h5'>
                                        {infoCard.title}
                                    </Typography>
                                    {infoCard.info ? (
                                        <Typography variant='h6'>
                                            <strong>
                                                {infoCard.title.split(' ')[2]}:{' '}
                                            </strong>
                                            <br />
                                            {infoCard.info}
                                        </Typography>
                                    ) : null}
                                    <Typography variant='h6'>
                                        Try saying: <br />{' '}
                                        <i>{infoCard.text}</i>
                                    </Typography>
                                </div>
                            </Grid>
                        ))}
                </Grid>
            </Grow>
        )
    }

    return (
        <Grow in>
            <Grid
                className={classes.container}
                container
                alignItems='stretch'
                spacing={3}
            >
                {articles &&
                    articles.map((article, i) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            style={{ display: 'flex' }}
                        >
                            <NewsCard article={article} activeArticle={activeArticle} key={i} i={i} />
                        </Grid>
                    ))}
            </Grid>
        </Grow>
    )
}

export default NewsCards
