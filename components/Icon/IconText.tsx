import { useMemo } from "react"
import { Icon } from "./Icon"
import { IconName, iconRegistry } from "./registry"

export const IconText = ({ icon = 'building', text }: { icon?: IconName; text: string }) => {
	const resolvedIcon = useMemo(() => {
		return icon in iconRegistry ? icon : 'building'
	}, [icon])

	return (
		<div className="text-heading-mobile-h6 text-heading-desktop-h6 text-white whitespace-nowrap flex items-center gap-[32px]">
			<Icon name={resolvedIcon} />
			<div>{text}</div>
		</div>
	)
}
