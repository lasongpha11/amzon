import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { AppBar, Toolbar, Typography, Container, Link, createMuiTheme,CssBaseline, ThemeProvider } from '@material-ui/core';
import useStyles from '../utils/styles';

function Layout({ title ,children,description }) {

    const theme = createMuiTheme({
        typography: {
            h1: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem 0 ',
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem 0 ',
            },
            body1: {
                fontWeight:'normal',
            },
        },
        palette: {
            type: 'light',
            primary: {
                main:'#f0c000',
            },
            secondary: {
                main: '#208080',
            },
            
        }
    })

    const classes = useStyles();
    return (
        <div>
            <Head>
                <title> {title ? `${title} - Next Amazona ` : 'Next Amazona'}</title>    
                {description && <meta name="description" content={description} ></meta> }
            </Head>

            <ThemeProvider theme={theme} >
                <CssBaseline />
                <AppBar position="static" className ={classes.navbar} >
                    <Toolbar>
                        <NextLink href="/" passHref >
                            <Typography className ={classes.brand}>
                                amazona
                            </Typography>
                        </NextLink>
                        <div className ={classes.grow} ></div>
                        <div>
                            <NextLink href="/cart" passHref >
                                <Link>Cart</Link>
                            </NextLink>
                            <NextLink href="/login" passHref >
                                <Link>Login</Link>
                            </NextLink>
                        </div>
                    </Toolbar>
                </AppBar>
                <Container className ={classes.main} >
                    {children}
                </Container>
                <footer className ={classes.footer1} >
                    <Typography>
                        hihi
                    </Typography>
                </footer>
            </ThemeProvider>

        </div>
    );
}

export default Layout;