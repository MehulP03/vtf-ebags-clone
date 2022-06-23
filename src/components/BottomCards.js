import React from "react";
import {
  createStyles,
  Card,
  Image,
  Group,
  Text,
  SimpleGrid
} from "@mantine/core";

function ArticleCardFooter() {
  const { classes } = useStyles();

  return (
    <div style={{ marginTop: "80px", padding: "40px" }}>
      <SimpleGrid cols={3} size="sm">
        <Card withBorder p="lg" radius="md" className={classes.card}>
          <Card.Section mb="sm" style={{ textAlign: "center" }}>
            <Image
              src="https://cdn-fsly.yottaa.net/54636bb786305e35ea00040e/www.ebags.com/v~4b.692/on/demandware.static/-/Sites-ebags-Library/default/dwcd5354b4/slots/homepage-values/star-final2.svg?yocs=4p_4v_"
              alt="star"
              height={40}
              width={40}
              style={{ paddingRight: "45%", paddingLeft: "45%" }}
            />
          </Card.Section>
          <Text weight={700} className={classes.title} mt="xs" align="center">
            5 Star Rated
          </Text>
          <Group mt="lg">
            <div>
              <Text weight={500}>
                Our products are awesome, and 10k+ reviews show that you don't
                have to just take our word for it!
              </Text>
            </div>
          </Group>
        </Card>
        <Card withBorder p="lg" radius="md" className={classes.card}>
          <Card.Section mb="sm" style={{ textAlign: "center" }}>
            <Image
              src="https://cdn-fsly.yottaa.net/54636bb786305e35ea00040e/www.ebags.com/v~4b.692/on/demandware.static/-/Sites-ebags-Library/default/dwcd5354b4/slots/homepage-values/star-final2.svg?yocs=4p_4v_"
              alt="star"
              height={40}
              width={40}
              style={{ paddingRight: "45%", paddingLeft: "45%" }}
            />
          </Card.Section>
          <Text weight={700} className={classes.title} mt="xs" align="center">
            5 Star Rated
          </Text>
          <Group mt="lg">
            <div>
              <Text weight={500}>
                Our products are awesome, and 10k+ reviews show that you don't
                have to just take our word for it!
              </Text>
            </div>
          </Group>
        </Card>
        <Card withBorder p="lg" radius="md" className={classes.card}>
          <Card.Section mb="sm" style={{ textAlign: "center" }}>
            <Image
              src="https://cdn-fsly.yottaa.net/54636bb786305e35ea00040e/www.ebags.com/v~4b.692/on/demandware.static/-/Sites-ebags-Library/default/dwcd5354b4/slots/homepage-values/star-final2.svg?yocs=4p_4v_"
              alt="star"
              height={40}
              width={40}
              style={{ paddingRight: "45%", paddingLeft: "45%" }}
            />
          </Card.Section>
          <Text weight={700} className={classes.title} mt="xs" align="center">
            5 Star Rated
          </Text>
          <Group mt="lg">
            <div>
              <Text weight={500}>
                Our products are awesome, and 10k+ reviews show that you don't
                have to just take our word for it!
              </Text>
            </div>
          </Group>
        </Card>
      </SimpleGrid>
    </div>
  );
}

export default ArticleCardFooter;

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    border: "none",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: "#5f739f",
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));
