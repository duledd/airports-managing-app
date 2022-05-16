import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import styles from './Footer.module.css';

export const ResponsiveBottomNavigation = () => {

    return(
        <Container className={styles.container}>
            <Typography className={styles.text}>
                Footer
            </Typography>
        </Container>
    );
};