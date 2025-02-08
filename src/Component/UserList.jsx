import { Avatar, Card, CircularProgress, Divider, List, ListItem, ListItemAvatar, ListItemText, Skeleton, Typography } from "@mui/material";

const UserList = ({ usersList, loading }) => {
    const SkeletonComponent = () => {
        return (
            <>
            {Array.from(new Array(5)).map((_, index) => (
                <div key={index}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Skeleton variant="circular" width={40} height={40} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={<Skeleton variant="text" width="80%" height={20} />}
                            secondary={<Skeleton variant="text" width="60%" height={15} />}
                        />
                    </ListItem>
                    <Divider />
                </div>
            ))}
            </>
        )
    }
    return (
        <Card style={{height:515, overflowY: 'auto', borderRadius: '20px'}}>
            <Typography sx={{padding: 1}} variant="h6" >New User</Typography>
            <Divider/>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>                
                {loading ? <SkeletonComponent /> :
                usersList?.length ? usersList?.map((user) => 
                <>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt={user.name} src={user.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                    primary={user.name}
                    secondary={
                        <>
                        <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary' }}
                        >
                            {`${user.address.building}, ${user.address.street}, ${user.address.city}, ${user.address.country}`}
                        </Typography>                        
                        </>
                    }
                    />
                </ListItem>
                <Divider/>
                </>) : null
                }
            </List>
        </Card>)
}
export default UserList;