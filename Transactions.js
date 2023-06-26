import React from "react";
import Transaction from "./Transaction";


import { Box, Divider, List, Typography } from "@mui/material";

const Transactions = ({transactions, setTransactions}) =>{
    return(
        <Box>
            <Typography variant="h5">transaction History</Typography>
            <Divider/>
             <List>
                {
                    transactions.map(transaction =>(
                        <Transaction transaction={transaction} setTransactions={setTransactions} transactions={transactions}/>
                    ))
                }
            </List> 

            
        </Box>
    )
}
export default Transactions;