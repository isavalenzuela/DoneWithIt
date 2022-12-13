import * as React from 'react'
import { DataTable } from 'react-native-paper'
import { StyleSheet } from 'react-native'

const optionsPerPage = [2, 3, 4]

const DataTablePayments = () => {
  // const [page, setPage] = React.useState < number > 0
  // const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0])

  // React.useEffect(() => {
  //   setPage(0)
  // }, [itemsPerPage])

  return (
    <DataTable style={styles.dataTablePayments}>
      <DataTable.Header>
        <DataTable.Title>Pago</DataTable.Title>
        <DataTable.Title numeric>Fecha</DataTable.Title>
        <DataTable.Title numeric>Monto</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Escultura</DataTable.Cell>
        <DataTable.Cell numeric>01-12-2022</DataTable.Cell>
        <DataTable.Cell numeric>120.000</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Pintura</DataTable.Cell>
        <DataTable.Cell numeric>28-11-2022</DataTable.Cell>
        <DataTable.Cell numeric>40.000</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Escultura</DataTable.Cell>
        <DataTable.Cell numeric>15-11-2022</DataTable.Cell>
        <DataTable.Cell numeric>150.000</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Pintura</DataTable.Cell>
        <DataTable.Cell numeric>01-11-2022</DataTable.Cell>
        <DataTable.Cell numeric>140.000</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Escultura</DataTable.Cell>
        <DataTable.Cell numeric>30-10-2022</DataTable.Cell>
        <DataTable.Cell numeric>200.000</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Pagination
        // page={page}
        numberOfPages={3}
        // onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        // optionsPerPage={optionsPerPage}
        // itemsPerPage={itemsPerPage}
        // setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      />
    </DataTable>
  )
}

export default DataTablePayments

const styles = StyleSheet.create({
  cell: {
    paddingLeft: 30,
    paddingRight: 0,
  },
  dataTablePayments: {
    marginTop: 50,
  },
})
