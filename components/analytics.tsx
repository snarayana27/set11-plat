"use client";
import {
  AreaChart,
  BarList,
  Bold,
  Card,
  Flex,
  Grid,
  Text,
  Title,
} from "@tremor/react";

// Simulated data for sports club analytics
const attendanceData = [
  { date: "Jan 23", "Event Attendance": 120 },
  { date: "Feb 23", "Event Attendance": 135 },
  { date: "Mar 23", "Event Attendance": 150 },
  { date: "Apr 23", "Event Attendance": 160 },
  { date: "May 23", "Event Attendance": 175 },
  { date: "Jun 23", "Event Attendance": 180 },
];

const newMembers = [
  { name: "Jan 23", value: 20 },
  { name: "Feb 23", value: 25 },
  { name: "Mar 23", value: 30 },
  { name: "Apr 23", value: 35 },
  { name: "May 23", value: 40 },
  { name: "Jun 23", value: 45 },
];

const resourceUsage = [
  { name: "Tennis Courts", value: 320 },
  { name: "Cricket Grounds", value: 280 },
  { name: "Gym", value: 350 },
  { name: "Soccer Field", value: 200 },
  { name: "Basketball Court", value: 150 },
];

const categories = [
  {
    title: "New Members",
    subtitle: "Month",
    data: newMembers,
  },
  {
    title: "Resource Usage",
    subtitle: "Facility",
    data: resourceUsage,
  },
];

export default function SportsClubAnalytics() {
  return (
    <div className="grid gap-6">
      <Card>
        <Title>Event Attendance</Title>
        <AreaChart
          className="mt-4 h-72"
          data={attendanceData}
          index="date"
          categories={["Event Attendance"]}
          colors={["green"]} // Primary color for emphasis
          valueFormatter={(number: number) =>
            Intl.NumberFormat("us").format(number).toString()
          }
        />
      </Card>
      <Grid numItemsSm={2} numItemsLg={2} className="gap-6">
        {categories.map(({ title, subtitle, data }) => (
          <Card key={title} className="max-w-lg">
            <Title>{title}</Title>
            <Flex className="mt-4">
              <Text>
                <Bold>{subtitle}</Bold>
              </Text>
              <Text className="ml-auto">
                <Bold>Count</Bold>
              </Text>
            </Flex>
            <BarList
              data={data}
              className="mt-2"
               // Secondary color for visual consistency
            />
          </Card>
        ))}
      </Grid>
    </div>
  );
}
