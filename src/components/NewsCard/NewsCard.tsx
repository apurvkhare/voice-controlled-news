import React, { useState, useEffect, createRef } from 'react'
import {
    Card,
    CardActions,
    CardActionArea,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@material-ui/core'
import classnames from 'classnames'
import useStyles from './styles'

export interface Article {
    description: string
    publishedAt: string
    source: { name: string }
    title: string
    url: string
    urlToImage: string
}

export interface NewsCardProps {
    article: Article
    i: number
    activeArticle: number
}

const NewsCard: React.FC<NewsCardProps> = ({ article, i, activeArticle }) => {
    const { description, publishedAt, source, title, url, urlToImage } = article

    const classes = useStyles()
    const [elRefs, setElRefs] = useState([])
    const scrolltoRef = (ref: { current: { offsetTop: number } }) =>
        window.scroll(0, ref.current.offsetTop - 50)

    useEffect(() => {
        setElRefs(refs =>
            Array(20)
                .fill(null)
                .map((_, j) => refs[j] || createRef())
        )
    }, [])

    useEffect(() => {
        if (i === activeArticle && elRefs[activeArticle]) {
            scrolltoRef(elRefs[activeArticle])
        }
    }, [i, activeArticle, elRefs])

    return (
        <Card
            ref={elRefs[i]}
            className={classnames(
                classes.card,
                activeArticle === i && classes.activeCard
            )}
        >
            <CardActionArea href={url} target='_blank'>
                <CardMedia
                    className={classes.media}
                    image={
                        urlToImage ||
                        'https://images.unsplash.com/photo-1586339949216-35c2747cc36d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
                    }
                />
                <div className={classes.details}>
                    <Typography
                        variant='body2'
                        color='textSecondary'
                        component='h2'
                    >
                        {new Date(publishedAt).toDateString()}
                    </Typography>
                    <Typography
                        variant='body2'
                        color='textSecondary'
                        component='h2'
                    >
                        {source.name}
                    </Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant='h5'>
                    {title}
                </Typography>
                <CardContent>
                    <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                    >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary'>
                    Read More
                </Button>
                <Typography variant='h5' color='textSecondary'>
                    {+i + 1}
                </Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard
