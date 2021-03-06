import React , { useMemo } from 'react';
import { useTable , usePagination } from 'react-table'

import { Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    marginBottom: "20px"
  },  
  TableCellDisplay:{
    border: `1px solid ${theme.palette.divider}`
  },
}));



export default function TabelaFilter({
    ariaLabel,
    size,
    headers,
    headerHides,
    rows,
    linePage
  }){

  const classes = useStyles();



  const data = useMemo(
    () => rows || [] , [rows]
  )
 
  const columns = useMemo(
    () => headers, [headers]
  )


  const defaultColumn = {
  }



  const {
    headerGroups,
    prepareRow,
    page,
    getTableProps
  } = useTable(
    { 
      
      columns, 
      data,

      defaultColumn, 

      initialState: { 
        pageIndex: 0 , 
        pageSize: linePage || 5,
        hiddenColumns: headerHides || []
      }

    }, 
    usePagination)

  
  return (
    <Grid item xs={12}>
      <Table 
        className={classes.table} 
        size={size || 'small'} 
        aria-label={ariaLabel}
        {...getTableProps()}
      >


        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow key={headerGroup} {...headerGroup.getHeaderGroupProps()} >
              {headerGroup.headers.map(column => (
                <TableCell 
                  
                  key={column}  
                  align={column.render('align')}
                  className={classes.TableCellDisplay}
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>



        <TableBody>
          {page.map((row,i)  => {
            prepareRow(row)
            return (
              <TableRow key={row} {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <TableCell 
                      sx={{

                        height: "25px",
                        pl: '5px',
                        pr: '5px',
                        pt: '2px',
                        pb: '2px',
                     
                        fontSize: '12px',
                        fontWeight: 'bold',
                        letterSpacing: '0.5px',
                        textDecoration: 'none',
                        '&:hover': {
                          backgroundColor: '#f5f5f5',
                          cursor: 'pointer'
                        }
                      }}
                      align={cell.column.align}
                      className={classes.TableCellDisplay}
                      {...cell.getCellProps()}
                    >

                      {cell.render('Cell')}
                      {/* {JSON.stringify(cell.value)?.replace('"', '')?.replace('"', '')}  */}
                     

                    </TableCell>
                    )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>






    </Grid>
  );
}
