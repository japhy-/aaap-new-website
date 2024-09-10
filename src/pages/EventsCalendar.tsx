import {
  ActionIcon,
  Anchor,
  Badge,
  Button,
  Center,
  Checkbox,
  Flex,
  Group,
  Indicator,
  Modal,
  NumberInput,
  SimpleGrid,
  Stack,
  Table,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { Calendar, DatePickerInput, DateTimePicker } from "@mantine/dates";
import {
  IconCalendar,
  IconEdit,
  IconExternalLink,
  IconInfoSquare,
  IconPlus,
  IconSearch,
} from "@tabler/icons-react";
import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useMembers } from "../hooks/useMembers";

type CalendarEvent = {
  date: string;
  time?: [string, string];
  title: string;
  subtitle?: string;
  location: string;
  tags: string[];
  link?: string;
  cancelled?: true;
};

const events: CalendarEvent[] = [
  {
    date: "2024-05-31",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-06-07",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-06-11",
    time: ["7:30 PM", "9:30 PM"],
    title: "AAAP Meeting",
    subtitle: "Planetarium Show",
    location: "NJ State Museum Planetarium",
    tags: ["meeting", "recurring", "monthly", "planetarium"],
    link: `/speaker/2024-06-11`,
  },
  {
    date: "2024-06-14",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
    cancelled: true,
  },
  {
    date: "2024-06-21",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-06-28",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-07-05",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-07-12",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-07-19",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-07-26",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-08-02",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-08-09",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-08-16",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-08-23",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-08-30",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-09-06",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-09-13",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-09-20",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-09-27",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-10-04",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-10-11",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-10-18",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
  {
    date: "2024-10-25",
    time: ["sunset", "11:00 PM"],
    title: "Observatory Public Night",
    location: "Simpson Observatory",
    tags: ["observatory", "recurring", "weekly"],
    link: "/observatory",
  },
];

function displayEvents(date: Date) {
  const dateStr = date.toISOString().split("T")[0];
  const event = events.find((event) => event.date === dateStr);
  if (event) {
    return {
      style: {
        backgroundColor: event.cancelled
          ? "var(--mantine-color-red-text)"
          : "var(--mantine-color-green-text)",
        opacity: event.cancelled ? 0.5 : 1,
        color: "white",
      },
      children: (
        <div>
          <div>{event.title}</div>
          {event.subtitle && <div>{event.subtitle}</div>}
          <div>{event.tags.join(", ")}</div>
        </div>
      ),
    };
  }
  return {};
}

const tzOffset = new Date().getTimezoneOffset();
const today = new Date(Date.now() - tzOffset * 60000)
  .toISOString()
  .slice(0, 10);

const localToday = new Date().getDate();

function displayDay(date: Date) {
  return (
    <Indicator
      size={6}
      color="yellow"
      offset={-2}
      disabled={date.toISOString().slice(0,10) !== today}
    >
      <div>{date.getDate()}</div>
    </Indicator>
  );
}

export function EventsCalendar() {
  const isMembers = useMembers();
  const [chosenEvent, setChosenEvent] = useState<CalendarEvent | null>(null);
  const [month, setMonth] = useState(new Date().toISOString().slice(0, 7));
  const displayMonth = useMemo(
    () =>
      new Date(`${month}-15`).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      }),
    [month]
  );

  const eventsData = useMemo(
    () =>
      events
        .filter(({ date }) => date.startsWith(month))
        .map((event) => [
          <Text fz="h2">{new Date(event.date).getUTCDate()}</Text>,
          <Stack gap={0}>
            <Text size="lg">{event.title}</Text>
            {event.cancelled && (
              <Text size="lg" c="red" fw="bold">
                CANCELLED
              </Text>
            )}
            {!event.cancelled && event.subtitle && (
              <Text size="sm">{event.subtitle}</Text>
            )}
          </Stack>,
          <Stack gap={0}>
            <Text>{event.location}</Text>
            {event.time && <Text size="xs">{event.time.join(" - ")}</Text>}
          </Stack>,
          <ActionIcon
            variant="transparent"
            onClick={() => setChosenEvent(event)}
          >
            {isMembers ? <IconEdit/> : <IconInfoSquare />}
          </ActionIcon>,
          <Checkbox disabled={event.cancelled || event.date < today} />,
        ]),
    [month]
  );

  const [requestModalOpen, setRequestModalOpen] = useState(false);

  const openRequestEventModal = useCallback(() => {
    setRequestModalOpen(true);
  }, []);

  const closeRequestEventModal = useCallback(() => {
    setRequestModalOpen(false);
  }, []);

  const [createModalOpen, setCreateModalOpen] = useState(false);

  const openCreateEventModal = useCallback(() => {
    setCreateModalOpen(true);
  }, []);

  const closeCreateEventModal = useCallback(() => {
    setCreateModalOpen(false);
  }, []);

  return (
    <>
      <SimpleGrid cols={2}>
        <Center>
          <Stack>
            <Calendar
              firstDayOfWeek={0}
              size="xl"
              getDayProps={displayEvents}
              renderDay={displayDay}
              onDateChange={(date) => {
                setMonth(date.toISOString().slice(0, 7));
              }}
            />
            <TextInput
              rightSection={<IconSearch size={16} />}
              placeholder="Search events"
            />
            <Button
              rightSection={<IconPlus size={16} />}
              onClick={isMembers ? openCreateEventModal : openRequestEventModal}
            >
              {isMembers ? "Create" : "Request"} an Event
            </Button>
          </Stack>
        </Center>
        <Stack mt={10}>
          <Text ta="center" size="xl" fw={500}>
            Events in {displayMonth}
          </Text>
          <Table
            data={{
              // head: [],
              body: eventsData,
              // foot: [],
            }}
          />
        </Stack>
      </SimpleGrid>
      {/* subtitle={chosenEvent?.title} size="md" header={chosenEvent?.title} footer={chosenEvent?.title} caption={chosenEvent?.title} overlayOpacity={0.5} withCloseButton={true} withHeader={true} withFooter={true} withCaption */}
      <Modal
        title={
          chosenEvent?.date && (
            <Group>
              <IconCalendar />
              <Text>
                {new Date(chosenEvent.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  // year: 'numeric',
                  month: "long",
                  day: "numeric",
                })}
              </Text>
            </Group>
          )
        }
        opened={Boolean(chosenEvent)}
        onClose={() => setChosenEvent(null)}
      >
        {chosenEvent && (
          <Stack>
            <Text fz="h2">{chosenEvent.title}</Text>
            {chosenEvent.subtitle && <Text>{chosenEvent.subtitle}</Text>}
            <Text>Location: {chosenEvent.location}</Text>
            {chosenEvent.time && (
              <Text>Time: {chosenEvent.time.join(" - ")}</Text>
            )}
            {chosenEvent.link && (
              <Flex justify="flex-end">
                <Anchor component={Link} to={chosenEvent.link}>
                  <Group gap="sm">
                    <Text>More Details...</Text>
                    <IconExternalLink />
                  </Group>
                </Anchor>
              </Flex>
            )}
            <Group>
              {chosenEvent.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </Group>
          </Stack>
        )}
      </Modal>

      <Modal
        title={
          <Group>
            <IconCalendar />
            <Text>Request an Event</Text>
          </Group>
        }
        opened={requestModalOpen}
        onClose={closeRequestEventModal}
      >
        <Stack gap="sm">
          <DateTimePicker
            label="Event Date"
            required
            firstDayOfWeek={0}
            valueFormat="MMM DD, YYYY hh:mm A"
          />
          <DatePickerInput
            label="Rain Date(s)"
            firstDayOfWeek={0}
            type="multiple"
          />
          <TextInput
            label="Location"
            required
            placeholder="Lawrenceville Public Library"
          />
          <TextInput
            label="Contact Email"
            required
            placeholder="name@domain.com"
          />
          <Textarea label="Expected Agenda" />
          <Flex direction="row-reverse" justify="space-between">
            <Button type="submit" onClick={closeRequestEventModal}>
              Submit Request
            </Button>
            <Button type="reset" color="gray" onClick={closeRequestEventModal}>
              Cancel
            </Button>
          </Flex>
        </Stack>
      </Modal>

      <Modal
        title={
          <Group>
            <IconCalendar />
            <Text>Create an Event</Text>
          </Group>
        }
        opened={createModalOpen}
        onClose={closeCreateEventModal}
      >
        <Stack gap="sm">
          <DateTimePicker
            label="Event Date"
            required
            firstDayOfWeek={0}
            valueFormat="MMM DD, YYYY hh:mm A"
          />
          <DatePickerInput
            label="Rain Date(s)"
            firstDayOfWeek={0}
            type="multiple"
          />
          <TextInput
            label="Location"
            required
            placeholder="Lawrenceville Public Library"
          />
          <TextInput
            label="Event Lead Email"
            required
            placeholder="name@domain.com"
          />
          <TextInput
            label="Requester Email"
            placeholder="name@domain.com"
          />
          <NumberInput label="Members Needed" />
          <TextInput label="Equipment Needed" type="string" />
          <Textarea label="Expected Agenda" />
          <Flex direction="row-reverse" justify="space-between">
            <Button type="submit" onClick={closeCreateEventModal}>
              Create Event
            </Button>
            <Button type="reset" color="gray" onClick={closeCreateEventModal}>
              Cancel
            </Button>
          </Flex>
        </Stack>
      </Modal>
    </>
  );
}
