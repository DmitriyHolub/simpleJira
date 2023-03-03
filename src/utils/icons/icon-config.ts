export interface AppIconsConfig {
  [key: string]: IconConfig;
}

export interface IconConfig {
  path?: string;
  svgString?: string;
}

export const DEFAULT_ICON_CONFIG: AppIconsConfig = {
  headerArrow: {
    path: 'assets/icons/arrow.svg',
  },
  anchor: {
    path: 'assets/icons/anchor.svg',
  },
  filter: {
    path: 'assets/icons/filter.svg',
  },
  free: {
    path: 'assets/icons/free.svg',
  },
  github: {
    path: 'assets/icons/github.svg',
  },
  meh: {
    path: 'assets/icons/meh.svg',
  },
  save: {
    path: 'assets/icons/save.svg',
  },
  sunset: {
    path: 'assets/icons/sunset.svg',
  },
  user: {
    path: 'assets/icons/user.svg',
  },
  chevron: {
    path: 'assets/icons/chevron.svg',
  },
  help: {
    path: 'assets/icons/help.svg',
  },
  settings: {
    path: 'assets/icons/settings.svg',
  },
  notifications: {
    path: 'assets/icons/notifications.svg',
  },
  major: {
    path: 'assets/icons/major.svg',
  },
  bug: {
    path: 'assets/icons/ticketIcons/bug.svg',
  },
  menu: {
    path: 'assets/icons/menu.svg',
  },
};
