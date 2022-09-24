import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Container, Stack, Space } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function GetInTouchSimple() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value: string) => value.trim().length < 2,
      email: (value: string) => !/^\S+@\S+$/.test(value),
      subject: (value: string) => value.trim().length === 0,
      message: (value: string) => value.trim().length === 0,

    },
  });

  return (
    <Container>
      <Stack>
        <Space h={10} />
        <form onSubmit={form.onSubmit(() => { })}>
          <Title
            order={2}
            size="h1"
            sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
            weight={900}
            align="center"
          >
            Contact
          </Title>

          <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            <TextInput
              label="Name"
              withAsterisk
              placeholder="Your name"
              name="name"
              variant="default"
              {...form.getInputProps('name')}
            />
            <TextInput
              label="Email"
              withAsterisk
              placeholder="Your email"
              name="email"
              variant="default"
              {...form.getInputProps('email')}
            />
          </SimpleGrid>

          <TextInput
            label="Subject"
            withAsterisk
            placeholder="Subject"
            mt="md"
            name="subject"
            variant="default"
            {...form.getInputProps('subject')}
          />
          <Textarea
            mt="md"
            label="Message"
            placeholder="Your message"
            maxRows={10}
            withAsterisk

            minRows={5}
            autosize
            name="message"
            variant="default"
            {...form.getInputProps('message')}
          />

          <Group position="center" mt="xl">
            <Button type="submit" size="md">
              Send message
            </Button>
          </Group>
        </form>
      </Stack>

    </Container>

  );
}