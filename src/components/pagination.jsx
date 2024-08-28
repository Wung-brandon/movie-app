import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function PaginationComponent(props){
    return(
        <div>
             <Stack spacing={2} sx={{marginBottom:"1rem", marginLeft:"1rem", zIndex:1000}}>
                <Pagination
                    count={10}
                    variant="outlined"
                    color='success'
                    shape="rounded"
                    onChange={props.change}

                    sx={{
                        '& .MuiPaginationItem-root': {
                            color: 'white',
                        },
                        '& .Mui-selected': {
                            backgroundColor: 'teal',
                            color: '#151922',
                        },
                        '& .MuiPaginationItem-page:hover': {
                            backgroundColor: 'teal',
                            color: '#151922',
                        },
                    }}
                />
            </Stack>
        </div>
    )
}