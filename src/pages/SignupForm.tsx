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

export function SignupForm() {
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
      <Checkbox.Group label="How did you find out about the AAAP? (select all that apply)">
        <Stack gap="xs" mt="xs">
          <Checkbox value="aaap-web-site" label="AAAP Web Site" />
          <Checkbox value="search-engine" label="Search Engine" />
          <Group>
            <Checkbox
              value="social-media"
              label="Social Media (please specify)"
            />
            <TextInput size="xs" placeholder="@JohnDoe on Twitter" />
          </Group>
          <Checkbox value="personal" label="Personal Referral" />
          <Checkbox value="news" label="Newspaper or News Site" />
          <Checkbox value="aaap-event" label="Attended AAAP Event" />
          <Group>
            <Checkbox value="other" label="Other (please specify)" />
            <TextInput
              size="xs"
              placeholder="Saw a sign at Washington Crossing State Park"
            />
          </Group>
        </Stack>
      </Checkbox.Group>
      <TextInput
        label="What areas of astronomy interest you most?"
        placeholder="Astrophotography, planetary science, cosmology, etc."
        w={600}
      />
      <Checkbox.Group label="Below is a list of some opportunities for new member participation. Please indicate which might interest you: (select all that apply)">
        <Stack gap="xs" mt="xs">
          <Checkbox
            value="program-committee"
            label="Program committee: planning programs, inviting professional and other amateur astronomers to speak."
          />
          <Checkbox label="Observatory: assisting and operating the AAAP Observatory during public and member nights." />
          <Checkbox label="Public & youth astronomy outreach: educate and inspire others with telescopes and/or presentations." />
          <Checkbox label="Membership and club social interactions: publicity and social media to attract and develop membership." />
          <Checkbox label="10-minute member talk: present your own astronomy experience at a club meeting." />
          <Checkbox label="Light pollution effort: actively working to control local light pollution." />
        </Stack>
      </Checkbox.Group>
      <Textarea label="Other relevant information" rows={5} w={500} />
      <Flex justify="space-around">
        <Button>Sign Up</Button>
      </Flex>
    </Stack>
  );
}
