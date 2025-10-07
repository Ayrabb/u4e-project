type BadgeType = "news" | "press" | "video" | "gallery";
type BadgeSize = "sm" | "md" | "lg";

type Badge = {
	label: string;
	bgcolour: string; //tailwind class for bg color
	textcolour: string; //tailwind class for text color
	ringcolour: string; //tailwind class for inset ring color
}

export interface NewsItem {
	id: number;
	title: string;
	date: string;
	category: BadgeType;
	image?: string;
	youtube_link?: string;
	description?: string;
	source?: string;
	url?: string;
}

export const NewsBadges: Record <BadgeType, Badge> = {
	news: {
		label: "NEWS",
		bgcolour: "bg-green-100",
		textcolour: "text-green-900",
		ringcolour: "inset-ring-green-900"
	},
	press: {
		label: "PRESS RELEASE",
		bgcolour: "bg-blue-100",
		textcolour: "text-blue-900",
		ringcolour: "inset-ring-blue-900"
	},
	video: {
		label: "VIDEO",
		bgcolour: "bg-red-100",
		textcolour: "text-red-900",
		ringcolour: "inset-ring-red-900"
	},
	gallery: {
		label: "GALLERY",
		bgcolour: "bg-purple-100",
		textcolour: "text-purple-800",
		ringcolour: "inset-ring-purple-900"
	}
};

const badgeSizes: Record<BadgeSize, string> = {
	sm: "px-2 py-0.5 text-[0.6rem]",
	md: "px-2.5 py-1 text-sm",
	lg: "px-3 py-1.5 text-base"
};

interface BadgeProps {
	type: BadgeType;
	size?: BadgeSize;
}

export const Badge = ({ type, size = "sm" }: BadgeProps) => {
	const badge = NewsBadges[type];
    const sizeClasses = badgeSizes[size];
  
  return (
    <span 
      className={`inline-flex items-center rounded-full font-medium inset-ring ${sizeClasses} ${badge.bgcolour} ${badge.textcolour} ${badge.ringcolour}`}
    >
      {badge.label}
    </span>
  );
};
