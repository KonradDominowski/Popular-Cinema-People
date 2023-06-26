import { Suspense } from "react";
import { useImage } from "react-image";
import imagePlaceholder from './../../media/imagePlaceholder.jpg'

export default function Image({ imgSrc }) {
	const sources = [imgSrc, imagePlaceholder]
	const { src } = useImage({
		srcList: sources,
	})

	return <Suspense>
		<img src={ src } />
	</Suspense>
}
