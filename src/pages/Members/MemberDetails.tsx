import {
  Button,
  Checkbox,
  Divider,
  Flex,
  Group,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IMaskInput } from "react-imask";

export function MemberDetails() {
  return (
    <Stack>
      <Group>
        <TextInput w={250} label="First Name" placeholder="John" />
        <TextInput w={250} label="Last Name" placeholder="Doe" />
      </Group>
      <TextInput
        label="Full Address"
        placeholder="123 Main Street, Trenton, NJ, 08648"
        w={600}
      />
      <Group>
        <TextInput w={250} label="Email" placeholder="john.doe@gmail.com" />
        <TextInput
          label="Phone"
          component={IMaskInput}
          // @ts-ignore
          mask="(000) 000-0000"
          placeholder="(609) 555-5555"
        />
      </Group>
      <Divider />
      <Textarea label="Astronomy Equipment You Own" rows={5} w={500} />
      <Textarea
        label="Profession and/or Astronomy-Related Skills"
        rows={5}
        w={500}
      />
      <TextInput
        label="What areas of astronomy interest you most?"
        placeholder="Astrophotography, planetary science, cosmology, etc."
        w={600}
      />
      <Textarea label="Other relevant information" rows={5} w={500} />
      <Flex justify="space-around">
        <Button>Update Membership Information</Button>
      </Flex>
    </Stack>
  );
}
