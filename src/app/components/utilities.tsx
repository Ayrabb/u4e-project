type BadgeType = "news" | "press" | "video" | "external";

type Badge = {
	label: string;
	bgcolour: string; //tailwind class for bg color
	textcolour: string; //tailwind class for text color
}

export const NewsBadges: Record <BadgeType, Badge> = {
	news: {
		label: "NEWS",
		bgcolour: "bg-green-100",
		textcolour: "text-green-800"
	},
	press: {
		label: "PRESS RELEASE",
		bgcolour: "bg-blue-100",
		textcolour: "text-blue-800"
	},
	video: {
		label: "VIDEO",
		bgcolour: "bg-gray-100",
		textcolour: "text-gray-800"
	},
	external: {
		label: "EXTERNAL COVERAGE",
		bgcolour: "bg-gray-100",
		textcolour: "text-gray-800"
	}
};
