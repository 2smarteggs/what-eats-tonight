import {Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const WEFoodCard = (props) => {

    return(
        <Card sx={Styles.Card}>
            <CardMedia
                sx={{ height: '20vh' }}
                image="https://img2.baidu.com/it/u=3708501104,2668950655&fm=253&fmt=auto&app=138&f=JPEG?w=501&h=500"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.desc}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', flexDirection: 'row-reverse'}}>
                <IconButton aria-label={'add'} size="large">
                    <AddIcon fontSize="inherit" />
                </IconButton>
            </CardActions>
        </Card>
    );
}

const Styles = {
    Card: {
        maxWidth: `${(100 - 2) / 2}vw`,
        m: '1vw'
    }
}

export default WEFoodCard;