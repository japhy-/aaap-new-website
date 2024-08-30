import { Flex, Stack, Table, Text } from "@mantine/core";
import { IconDownload, IconFileDownload } from "@tabler/icons-react";

const members: {
  name: { last: string; first: string };
  email: string;
  phone: string;
  address: string;
  role?: string;
}[] = [
  {
    name: { last: "Doe", first: "John" },
    email: "john.doe@gmail.com",
    phone: "(609) 555-5555",
    address: "123 Main Street, Trenton, NJ, 08648",
  },
  {
    name: { last: "Smith", first: "Jane" },
    email: "jane.smith@aol.com",
    phone: "(609) 555-5555",
    address: "456 Elm Street, Trenton, NJ, 08648",
  },
  {
    name: { last: "Johnson", first: "Bob" },
    email: "bob.johnson@gmail.com",
    phone: "(609) 555-5555",
    address: "789 Oak Street, Trenton, NJ, 08648",
    role: "Secretary",
  },
  {
    name: { last: "Brown", first: "Sue" },
    email: "sue.brown@gmail.com",
    phone: "(609) 555-5555",
    address: "101 Pine Street, Trenton, NJ, 08648",
    role: "President",
  },
  {
    name: { last: "Williams", first: "Bill" },
    email: "bill.williams@gmail.com",
    phone: "(609) 555-5555",
    address: "222 Cedar Street, Trenton, NJ, 08648",
  },
  {
    name: { last: "Jones", first: "Mary" },
    email: "mary.jones@gmail.com",
    phone: "(609) 555-5555",
    address: "333 Maple Street, Trenton, NJ, 08648",
    role: "Treasurer",
  },
  {
    name: { last: "Garcia", first: "Jose" },
    email: "jose.garcia@gmail.com",
    phone: "(609) 555-5555",
    address: "444 Oak Street, Trenton, NJ, 08648",
    role: "Director",
  },
];

export function MembersRoster() {
  return (
    <Stack>
      <Flex justify="space-between">
        <Text size="xl">
          Membership Roster
        </Text>
        <IconDownload size={30}/>
      </Flex>
      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Role</Table.Th>
            <Table.Th>Last Name</Table.Th>
            <Table.Th>First Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Phone</Table.Th>
            <Table.Th>Address</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {members.map((member, i) => (
            <Table.Tr key={i}>
              <Table.Td>{member.role}</Table.Td>
              <Table.Td>{member.name.last}</Table.Td>
              <Table.Td>{member.name.first}</Table.Td>
              <Table.Td>{member.email}</Table.Td>
              <Table.Td>{member.phone}</Table.Td>
              <Table.Td>{member.address}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Stack>
  );
}
