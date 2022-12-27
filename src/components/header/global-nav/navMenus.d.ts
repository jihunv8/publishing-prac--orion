export type Menu = {
  title: string;
  href: string;
};

export type SuperMenu = {
  subMenu: Menu[];
} & Menu;

export type RootMenu = {
  subMenu: SuperMenu[];
} & Menu;
