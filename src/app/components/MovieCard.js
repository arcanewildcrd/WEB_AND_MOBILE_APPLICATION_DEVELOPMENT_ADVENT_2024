import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MovieCard({ movie }) {

    return (
        <Card sx={{ maxWidth: 345, maxHeight: 400, minHeight: 400 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={movie.big_image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {movie.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {movie.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}