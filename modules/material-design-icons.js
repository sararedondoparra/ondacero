
import { resolve } from 'path'

const icons = ['Account', 'Magnify', 'Headphones', 'Cog', 'BellBadge', 'Play', 'Pause', 'Bookmark', 'Shuffle', 'SkipPrevious', 'SkipNext', 'Repeat']

export default function () {
	this.nuxt.hook('components:dirs', (dirs) => {
		dirs.push({
			path: resolve('node_modules/vue-material-design-icons'),
			prefix: 'MlIcon',
			pattern: `**/@(${icons.join('|')}).vue`,
		})
	})
}