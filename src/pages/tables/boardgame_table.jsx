import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'genre', headerName: 'Genre', width: 130 },
    { field: 'played', headerName: 'Played', width: 130 },

    {
        field: 'rating',
        headerName: 'Rating',
        type: 'number',
        width: 90,
    },
    {
        field: 'campaign',
        headerName: 'Campaign',
        type: 'number',
        width: 90,
    },
];


export default function DataTable(data) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data.data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}