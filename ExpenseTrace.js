import React,{useState} from 'react';
import { Typography, styled, Box } from '@mui/material';
import Balance from './Balance';
import ExpendCard from './ExpendCard';
import NewTransaction from './NewTransaction';
import Transactions from './Transactions';

const Header = styled(Typography)`
    margin:10px 0;
    font-size:36px;
    color:blue;
    text-transform:uppercase;
    `

    const Block = styled(Box)`
    width: 50%;
    `

const ExpenseTrace = () =>{

    const[transactions, setTransactions] = useState([
        {id: 1, date:"2023/01/01", type:'income', name:'salary1', amount: 7000 },
        {id: 2, date:'2023/01/02', type:'expense',name:'fees1', amount: -1400 },
        {id: 3, date:"2023/01/03", type:'income',name:'salary2', amount: 5000 },
        {id: 4, date:"2023/01/04", type:'expense',name:'fees2', amount: -2000 }
    ]);

    
    return (
        <Block>
            <Header>Expense Tracker</Header>
            <Box>
                <Box>
                    <Balance transactions={transactions}/>
                    <ExpendCard transactions={transactions}/>
                    <NewTransaction setTransactions={setTransactions}/>
                </Box>
                <Box>
                    <Transactions transactions={transactions} setTransactions={setTransactions}/>
                </Box>
            </Box>
        </Block>
    )
}
export default ExpenseTrace;