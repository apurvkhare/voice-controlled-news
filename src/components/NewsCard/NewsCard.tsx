import React from 'react'
import {
    Card,
    CardActions,
    CardActionArea,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@material-ui/core'
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
    i: Number
}

const NewsCard: React.FC<NewsCardProps> = ({ article, i }) => {
    const { description, publishedAt, source, title, url, urlToImage } = article

    const classes = useStyles()

    return (
        <Card className={classes.card}>
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
