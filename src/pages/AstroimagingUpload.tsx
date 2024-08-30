import {
  Button,
  FileInput,
  FileInputProps,
  Flex,
  Image,
  Pill,
  Stack,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  TagsInput,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useCallback, useState } from "react";

export function AstroimagingUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const clearImages = useCallback(() => setFiles([]), []);

  return (
    <Stack>
      {files.length === 0 && (
        <FileInput
          valueComponent={ValueComponent}
          accept="image/*"
          placeholder="Upload images"
          multiple
          value={files}
          onChange={setFiles}
        />
      )}
      {files.length > 0 && (
        <>
          <Table>
            <TableThead>
              <TableTh w="auto">Thumbnail</TableTh>
              <TableTh w="33%">Who, What, When</TableTh>
              <TableTh w="33%">Where &amp; How</TableTh>
              <TableTh w="33%">Notes &amp; Tags</TableTh>
            </TableThead>
            <TableTbody>
              {files.map((file) => (
                <TableTr key={file.name}>
                  <TableTd>
                    <Stack gap="xs">
                      <Image
                        src={URL.createObjectURL(file)}
                        w="auto"
                        h={64}
                        alt={file.name}
                        title={file.name}
                        style={{ cursor: "pointer" }}
                      />
                      <Text
                        size="sm"
                        fs="italic"
                        style={{ wordBreak: "break-all" }}
                      >
                        {file.name}
                      </Text>
                    </Stack>
                  </TableTd>
                  <TableTd valign="top">
                    <Stack gap="xs">
                      <TextInput placeholder="Person who took the image" />
                      <TextInput placeholder="Target of the image" />
                      <DateInput placeholder="Date of the image" />
                    </Stack>
                  </TableTd>
                  <TableTd valign="top">
                    <Stack gap="xs">
                      <TextInput placeholder="Where you took the image" />
                      <Textarea
                        rows={3}
                        placeholder="Equipment used to take the image"
                      />
                    </Stack>
                  </TableTd>
                  <TableTd valign="top">
                    <Stack gap="xs">
                      <Textarea placeholder="Additional notes" />
                      <TagsInput placeholder="Tags (comma-separated)" />
                    </Stack>
                  </TableTd>
                </TableTr>
              ))}
            </TableTbody>
          </Table>
          <Flex justify="space-around">
            <Button color="green" onClick={clearImages}>
              Save These Images
            </Button>
            <Button variant="light" color="red" onClick={clearImages}>
              Discard These Images
            </Button>
          </Flex>
        </>
      )}
    </Stack>
  );
}

const ValueComponent: FileInputProps["valueComponent"] = ({ value }) => {
  if (value === null) {
    return null;
  }

  if (Array.isArray(value)) {
    return (
      <Pill.Group>
        {value.map((file, index) => (
          <Pill key={index}>{file.name}</Pill>
        ))}
      </Pill.Group>
    );
  }

  return <Pill>{value.name}</Pill>;
};
