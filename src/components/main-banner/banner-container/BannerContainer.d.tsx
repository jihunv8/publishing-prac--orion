export type BannerItem = {
  content: string;
  imageUrl: string;
  textColor?: string;
};

export type BannerContainerProps = {
  bannerIndex: number;
  bannerItems: BannerItem[];
};

export type BannerTitleProps = {
  textColor: string | undefined;
};

export type BannerProps = {
  isVisible: boolean;
};

export type BannerBackgroundImgeProps = {
  imageUrl: string;
  isVisible: boolean;
};
