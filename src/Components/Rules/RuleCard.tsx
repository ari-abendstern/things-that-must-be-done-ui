import {
  ActionIcon,
  Badge,
  Group,
  NumberInput,
  Paper,
  Text,
} from "@mantine/core";
import { useCounter } from "@mantine/hooks";
import { IconSquareRoundedPlusFilled, IconTrash } from "@tabler/icons-react";

const categories = {
  medical: {
    name: "Medical",
    icon: <IconSquareRoundedPlusFilled size={12} />,
    colour: "teal",
  },
};

const dummyData = {
  category: "medical",
  rule: "inhale steam for 15 minutes",
  frequencyType: "perDay", //perday, everyXHours, everyXDays
  frequency: 1,
};

function RuleCard() {
  const category = categories[dummyData.category];
  const [frequency, handlers] = useCounter(dummyData.frequency, {
    min: 0,
    max: 99,
  });
  return (
    <Paper withBorder shadow="xs" p="xs" maw={600} m="auto">
      <Group justify="space-between">
        <Badge
          leftSection={<IconSquareRoundedPlusFilled size={12} />}
          variant="light"
          color="teal"
        >
          {category.name}
        </Badge>
        <ActionIcon variant="default" color="red" size="xs">
          <IconTrash />
        </ActionIcon>
      </Group>
      <Group justify="flex-start" gap="xs">
        <Text>I {dummyData.rule} every</Text>
        <NumberInput
          maw={60}
          value={frequency}
          onChange={(value) => {
            handlers.set(value);
          }}
        />
        <Text>{frequency === 1 ? "day" : "days"}</Text>
      </Group>
    </Paper>
  );
}

export default RuleCard;
