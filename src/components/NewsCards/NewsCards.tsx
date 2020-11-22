import React from 'react'
import NewsCard, {Article} from '../NewsCard/NewsCard'
import useStyles from './styles'
import { Grid, Grow, Typography } from '@material-ui/core'

export interface NewsCardsProps {
    articles: Array<Article>
}

const NewsCards: React.FC<NewsCardsProps> = ({ articles }) => {

    const classes = useStyles();

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
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
                            <NewsCard article={article} key={i} i={i} />
                        </Grid>
                    ))}
            </Grid>
        </Grow>
    )
}

export default NewsCards
