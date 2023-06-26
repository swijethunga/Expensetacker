import styled from "@emotion/styled";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DeleteIcon from '@material-ui/icons/Delete';
import React from "react";
//import Table from 'react-bootstrap/Table';

 const Detail = styled(ListItem)`
     margin-top:10px;
 `

const Transaction = ({transaction, setTransactions, transactions}) =>{

    const color = transaction.amount > 0 ? 'Green' : 'Red';

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id))
    }
        return(<div>

            <ListItem>
                
            { <Detail style={{background:`${color}`, color: `#fff`}}>
                <ListItemIcon>
                    <DeleteIcon onClick={()=> deleteTransaction(transaction.id)}/>
                </ListItemIcon>
                    <ListItemText>{transaction.date}</ListItemText>
                    <ListItemText>{transaction.type}</ListItemText> 
                    <ListItemText>{transaction.name}</ListItemText> 
                    <ListItemText>{transaction.amount}</ListItemText> 
               </Detail> }

            </ListItem>

            
               
               
        </div>)
}
export default Transaction;