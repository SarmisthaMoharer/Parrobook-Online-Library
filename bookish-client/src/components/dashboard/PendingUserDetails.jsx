import { Table } from "flowbite-react";

const PendingUserDetails = () => {
  return (
    <div className="px-4 my-12">
      <h1 className='mb-8 text-3xl font-bold bg-gradient-to-r from-gray-500 via-black to-slate-500 bg-clip-text text-transparent '>Overdue Users</h1>
    <Table className='lg:w-[1100px]' striped>
      <Table.Head>
        <Table.HeadCell>User Name</Table.HeadCell>
        <Table.HeadCell>Book Name</Table.HeadCell>
        <Table.HeadCell>Due For</Table.HeadCell>
        <Table.HeadCell>Total Fine</Table.HeadCell>
        {/*<Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>*/}
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            U1
          </Table.Cell>
          <Table.Cell>B1</Table.Cell>
          <Table.Cell>5 Days</Table.Cell>
          <Table.Cell>25 Rs</Table.Cell>
          {/*<Table.Cell>
            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
              Edit
            </a>
          </Table.Cell>*/}
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
           U2
          </Table.Cell>
          <Table.Cell>B2</Table.Cell>
          <Table.Cell>1 Day</Table.Cell>
          <Table.Cell>5 Rs</Table.Cell>
           {/*<Table.Cell>
            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
              Edit
            </a>
          </Table.Cell>*/}
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">U3</Table.Cell>
          <Table.Cell>B3</Table.Cell>
          <Table.Cell>20 Days</Table.Cell>
          <Table.Cell>100 Rs</Table.Cell>
           {/*<Table.Cell>
            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
              Edit
            </a>
          </Table.Cell>*/}
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            U4
          </Table.Cell>
          <Table.Cell>B4</Table.Cell>
          <Table.Cell>15 Days</Table.Cell>
          <Table.Cell>75 Rs</Table.Cell>
           {/*<Table.Cell>
            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
              Edit
            </a>
          </Table.Cell>*/}
        </Table.Row>
       
      </Table.Body>
    </Table>
  </div>

  )
}

export default PendingUserDetails
