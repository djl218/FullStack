import React from 'react'
import {
    Button,
    TableCell
} from '@material-ui/core/'

const Persons = ({ person, deleteNameNumber }) => {
    return (
            <div>
                <TableCell>
                    {person.name} {person.number}
                </TableCell>
                <TableCell>
                    <Button variant="contained" color="primary" onClick={deleteNameNumber}>delete</Button>
                </TableCell>
            </div>
    )
}

export default Persons