export type BannerNavItem = {
  title: string;
  thumbUrl: string;
};

export type BannerNavProps = {
  bannerNavItems: BannerNavItem[];
  bannerIndex: number;
  setBannerIndex: React.Dispatch<number>;
};

export type BannerNavItemProps = {
  thumbUrl: string;
};

export type NavItemButtonProps = {
  isActive: boolean;
};
