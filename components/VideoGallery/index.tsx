"use client"

import { useEffect, useState } from "react"


const VideoGallery = () => {
	const [videos, setVideo] = useState([])

	const loadVideos = async () => {
		const response = await fetch("/api/assets/videos", { method: "GET"})
		const data = await response.json()

		console.log(data)
		
		if (data?.length > 0) {
			setVideo(data)
		}
	}

	useEffect(() => {
		loadVideos()
	}, [])

	return (
		<div className="flex flex-col gap-3">
			<div className="flex items-center">
				<h2 className="text-2xl font-semibold">Video Gallery</h2>
			</div>

			<div className="flex flex-wrap gap-4">
				{videos?.map((video: any) => {
					if (video?.active) {
						return (
							<div key={video.id}>
								<iframe
									src={video.src}
									title={video.title}
									width={300}
									height={200}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
								/>
							</div>
						)
					}
				})}
			</div>
		</div>
	)
}

export default VideoGallery