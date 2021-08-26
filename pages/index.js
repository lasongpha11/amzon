import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './../components/Layout';
import { Grid, Card, CardActionArea, CardMedia, Typography,CardContent, CardActions, Button } from '@material-ui/core';
import data from '../utils/data';
import NextLink from 'next/link';

export default function Home() {
  return (
    <div>
      <Layout>
        <div>haha</div>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name} >
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref >
                  <CardActionArea>
                    <CardMedia component="img" image={product.image} >
                      
                    </CardMedia>
                    <CardContent>
                      <Typography>
                        {product.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>

                <CardActions>
                  <Typography>
                    ${product.price}
                  </Typography>
                  <Button size="small" color="primary" >
                    Add to cart
                  </Button>
                </CardActions>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Layout>

    </div>
  )
}
