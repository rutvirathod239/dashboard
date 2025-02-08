import { Card, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const OrderData = ({ orderData, loading }) => {
    const getDate = (timestamp) => {
        return new Date(timestamp * 1000).toISOString().split("T")[0]
    }
    const tableHeaders = ['Order No', 'Date', 'Client Name', 'Amount', 'Qty', 'Shipment', 'Status']

    const SkeletonComponent = () => {
        return (
            Array.from(new Array(5)).map((_, index) => (
                <TableRow key={index}>
                    {Array.from(new Array(tableHeaders.length)).map((_, colIndex) => (
                        <TableCell key={colIndex}>
                            <Skeleton variant="text" width="100%" height={30} />
                        </TableCell>
                    ))}
                </TableRow>
            ))
        )
    }

    return (
        <Card  style={{height:520, overflowY: 'auto', borderRadius: '20px'}}>
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {tableHeaders?.map((header) => 
                                <TableCell className="table-header-cell" align="left">{header}</TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {loading ? <SkeletonComponent />
                    : orderData?.length && orderData.map((row) => (
                        <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell align="left" component="th" scope="row">
                            {row.orderno}
                        </TableCell>
                        <TableCell align="left">
                            {getDate(row.date)}
                        </TableCell>
                        <TableCell align="left">{row.clientname}</TableCell>
                        <TableCell align="left">{'\u20B9'} {row.amount}</TableCell>
                        <TableCell align="left">{row.qty}</TableCell>
                        <TableCell align="left">{row.shipment}</TableCell>
                        <TableCell align="left">
                            <span style={{
                                backgroundColor: row.status === 'Paid' ? '#e1efd5' : row.status === 'Cancelled' ? '#f8d7da' : '#fff3cd', 
                                color: row.status === 'Paid' ? '#67AF2C' : row.status === 'Cancelled' ? '#dc3545' : '#ffc107',
                                borderColor: row.status === 'Paid' ? '#67AF2C' : row.status === 'Cancelled' ? '#dc3545' : '#ffc107',
                                padding: '5px 7px',
                                border: '1px solid',
                                borderRadius: '5px' }}>
                                    {row.status}
                            </span>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}
export default OrderData;