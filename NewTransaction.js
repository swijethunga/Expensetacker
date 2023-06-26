import React, { useState } from 'react';
import { Box, Button, TextField, Typography, styled, Select, MenuItem } from '@mui/material';
import { clear } from '@testing-library/user-event/dist/clear';

const Container = styled(Box)`
        display:flex;
        flex-direction:column;
        & > h5, & > div, & > button{
            margin-top:30px
        }
        `

const NewTransaction = ({setTransactions}) =>{

    const [date, setDate] = useState('');
    const [type, setType] = useState('type');
    const [name, setName] = useState('');
    const [amount,setAmount] = useState();

    const addTransaction = () =>{
            const transaction = {
                date:date,
                name:name,
                amount:+amount,
                type: type
            }
            setTransactions(prevState => [transaction, ...prevState]);
            clear();
    }

        
    return(
        <Container>
            <Typography variant='h5'>New transaction</Typography>
            <TextField label='Enter date' value={date}  type='date' onChange={(e) => setDate(e.target.value)}/>
            <TextField label='Enter expense' value={name} onChange={(e) => setName(e.target.value)}/>
            <TextField label='Enter amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value="income">Income</MenuItem>
                <MenuItem value="expense">Expense</MenuItem>
            </Select>
            <Button variant='contained' onClick={()=> addTransaction()}>Add transaction</Button>
        </Container>
    )
}
export default NewTransaction;