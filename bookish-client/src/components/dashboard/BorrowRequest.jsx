import { Table } from "flowbite-react";

const BorrowRequest = () => {
  return (
    <div className="px-4 my-12">
         <h1 className='mb-8 text-3xl font-bold bg-gradient-to-r from-gray-500 via-black to-slate-500 bg-clip-text text-transparent '>Manage Borrow Requests</h1>

    <Table className='lg:w-[1100px]' striped>
    <Table.Head>
          <Table.HeadCell>Book name</Table.HeadCell>
          <Table.HeadCell>User Name</Table.HeadCell>
          {/*<Table.HeadCell>Accept Request</Table.HeadCell>
          <Table.HeadCell>Cancel</Table.HeadCell>*/}
         
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             B1
            </Table.Cell>
            <Table.Cell>U1</Table.Cell>
            <Table.Cell className="text-green-500">Accept</Table.Cell>
            <Table.Cell className="text-red-600">Cancel</Table.Cell>
           
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              B2
            </Table.Cell>
            <Table.Cell>U2</Table.Cell>
            <Table.Cell className="text-green-500">Accept</Table.Cell>
            <Table.Cell className="text-red-600">Cancel</Table.Cell>
            
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">B3</Table.Cell>
            <Table.Cell>U3</Table.Cell>
            <Table.Cell className="text-green-500">Accept</Table.Cell>
            <Table.Cell className="text-red-600">Cancel</Table.Cell>
            
          </Table.Row>
        </Table.Body>
     
    </Table>
  </div>
  )
}

export default BorrowRequest
