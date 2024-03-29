import React from "react";
import {
  createStyles,
  Header,
  Autocomplete,
  Group,
} from "@mantine/core";
import { Search } from "tabler-icons-react";

function HeaderSearch() {
  const { classes } = useStyles();

  return (
    <Header height={80} className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <svg
            class="logo-ebags"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="104"
            height="32"
            viewBox="0 0 104 32"
          >
            <path
              fill="#5F739F"
              fill-rule="evenodd"
              d="M10.266 5.994C3.378 5.994 0 10.337 0 15.422c0 5.084 3.378 9.428 10.266 9.428 3.478 0 7.43-1.717 9.118-5.96h-3.58c-1.148 2.492-3.782 3.132-5.707 3.132-3.005 0-6.247-1.953-6.517-5.59h16.277v-.438c0-7.306-4.931-10-9.591-10zm-6.585 7.812c.506-3.166 3.31-4.984 6.416-4.984 3.174 0 5.673 1.785 6.18 4.984H3.681zm28.1-7.61c-2.635 0-5.37.943-6.72 3.064h-.068V0h-3.377v24.244h3.377v-2.256h.068c1.316 1.852 4.119 2.862 6.72 2.862 5.335 0 9.623-3.4 9.623-9.327 0-5.926-4.288-9.327-9.623-9.327zm-.44 15.826c-4.592 0-6.551-3.165-6.551-6.499 0-4.04 2.6-6.5 6.551-6.5 3.917 0 6.484 2.46 6.484 6.5 0 3.334-1.925 6.499-6.484 6.499zm29.282-1.516v-9.495c0-4.108-4.525-5.017-8.139-5.017-5.301 0-8.34 1.717-8.78 6.128h3.175c.101-2.727 2.566-3.502 5.47-3.502 2.736 0 5.1.471 5.1 2.896 0 1.582-1.183 1.919-3.073 2.122l-3.85.403c-5.673.606-7.598 2.257-7.598 5.489 0 2.29 1.317 5.32 7.193 5.32 2.87 0 6.18-1.044 7.53-2.862.237 1.986 1.351 2.458 3.04 2.458.81 0 1.823-.067 2.634-.202v-2.357c-.338.068-.81.135-1.182.135-1.047 0-1.52-.471-1.52-1.516zm-3.174-3.232c0 2.93-3.208 4.95-7.024 4.95-2.465 0-4.12-1.145-4.12-2.795 0-1.852 1.384-2.56 4.018-2.896l3.816-.47c1.892-.237 2.803-.473 3.31-1.045v2.256zm23-8.081h-.068c-1.317-2.021-3.984-2.997-6.888-2.997-4.695 0-9.659 2.559-9.659 9.125 0 6.532 4.964 9.091 9.692 9.091 2.297 0 4.964-.539 6.855-3.266h.068v2.56c0 2.895-1.79 5.32-6.585 5.32-3.208 0-5.268-.573-5.876-2.862H64.61c.71 4.882 5.1 5.488 8.915 5.488 7.26 0 10.3-2.559 10.3-8.89V6.6h-3.377v2.593zm-6.518 12.391c-4.12 0-6.517-2.593-6.517-6.229 0-3.637 2.398-6.331 6.517-6.331 4.087 0 6.518 2.694 6.518 6.331 0 3.636-2.431 6.23-6.518 6.23zm23.541-7.442l-4.795-.64c-2.398-.336-2.938-1.01-2.938-2.188 0-2.088 2.5-2.694 4.66-2.694 3.512 0 5.201 1.516 5.302 3.3h3.377c-.304-3.435-2.836-5.926-8.645-5.926-4.963 0-8.07 2.12-8.07 5.69 0 2.728 2.261 4.344 4.794 4.68l5.573.742c2.701.37 3.342 1.11 3.342 2.357 0 1.246-1.046 2.76-5.403 2.76-4.288 0-5.572-1.952-5.572-3.535h-3.376c.371 5.118 4.997 6.162 9.05 6.162 5.403 0 8.881-1.92 8.881-6.027 0-2.492-1.723-4.074-6.18-4.68z"
            ></path>
          </svg>
        </Group>

        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            <a
              href="/"
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              BACKPACKS & BAGS
            </a>
            <a
              href="/"
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              LUGGAGE
            </a>
            <a
              href="/"
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              ACCESSORIES
            </a>
            <a
              href="/"
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              SHOP
            </a>
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<Search size={16} />}
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
          />
        </Group>
      </div>
    </Header>
  );
}

export default HeaderSearch;

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 75,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));
