import { CodeIcon, Github, Globe, HomeIcon, NotebookIcon, Youtube } from 'lucide-svelte';
// Navbar Icons
import GithubSvg from '$lib/imgs/github.svg';
import GithubDarkSvg from '$lib/imgs/github-dark.svg';

import GmailSvg from '$lib/imgs/gmail.svg';
import GmailDarkSvg from '$lib/imgs/gmail-dark.svg';

import InstagramDark from '$lib/imgs/instagram-dark.png';
import InstagramLight from '$lib/imgs/instagram-light.png';

import KesehatanImg from '$lib/imgs/kesehatan.png';
import TamoraImg from '$lib/imgs/tamoraputra.jpeg';

export let DATA = {
	name: 'Muhammad Norshahlan',
	initials: 'MN',
	url: 'https://mystorytell.vercel.app',
	img: 'https://i.pinimg.com/736x/9e/dc/a6/9edca66eba199828bda2dbaf35642154.jpg',
	location: 'Tanjung Morawa, Indonesian',
	locationLink: 'https://www.google.com/maps/place/Tanjung+Morawa',
	description:
		'Fullstack Web Developer & Graphic Designer. I am a passionate and creative professional specializing in web development and graphic design.',
	summary:
		'Fullstack Web Developer & Graphic Designer\n\nI am a passionate and creative professional specializing in web development and graphic design. With a keen eye for detail and a love for innovative solutions, I strive to create visually stunning and highly functional digital experiences.\n\nA Fullstack Web Developer will use their frontend and backend development understanding to create dynamic web applications. Using programming languages such as HTML, CSS and javascript to create the way the user interface looks. On the other hand, a Graphic designer focuses on creating excellent visual designs for branding and marketing. They use software like Adobe Photoshop, Illustrator to create Graphics, Logos and the layout of a page etc. Combining their technical know-how with a creative spin-churn out dynamic digital experiences.',
	avatarUrl: 'https://i.pinimg.com/564x/df/d2/76/dfd276448eed0f2b6094d1cb2c9d0269.jpg',
	skills: [
		'HTML',
		'CSS',
		'JavaScript',
		'PHP',
		'TypeScript',
		'PostgreSQL',
		'MySQL',
		'Laravel Framework',
		'SvelteKit Framework',
		'Adobe Photoshop',
		'Adobe Premiere',
		'Corel Draw',
		'Canva',
		'Figma',
		'Microsoft Office',
		'Microsoft Excel',
		'Microsoft PowerPoint',
	],
	navbar: [
		{ href: '/', icon: HomeIcon, label: 'Home' },
		{ href: '#', icon: CodeIcon, label: 'Projects' }
	],
	contact: {
		email: 'alansnulien@gmail.com',
		tel: '+6285836350018',
		social: {
			GitHub: {
				name: 'GitHub',
				url: 'https://github.com/MrPinguiiin',
				icon: GithubSvg,
				navbar: true,
				dark_icon: GithubDarkSvg
			},
			instagram: {
				name: 'Instagram',
				url: 'https://www.instagram.com/mrpinguiiin_/',
				// // icon: Icons.x,
				icon: InstagramLight,
				navbar: true,
				dark_icon: InstagramDark
			},
			email: {
				name: 'Send Email',
				url: '#',
				icon: GmailSvg,
				navbar: false,
				dark_icon: GmailDarkSvg
			}
		}
	},
	work: [
		{
			company: 'Perc. Tamora Putra',
			href: '/',
			badges: [],
			location: 'Tanjung Morawa, Indonesia',
			title: 'Graphic Designer',
			logoUrl: TamoraImg,
			start: 'January 2015',
			end: 'April 2018',
			description:
				'Designed and created visual content for print and digital media including brochures, flyers, logos, banners, and marketing materials. Collaborated with clients to understand their brand identity and translate concepts into compelling visual designs. Used Adobe Photoshop, Illustrator, and InDesign to create high-quality graphics and layouts. Managed multiple design projects from concept to final delivery, ensuring brand consistency and meeting client deadlines.'
		},
		{
			company: 'Dinas Kesehatan Deli Serdang',
			href: 'https://dinkes.deliserdangkab.go.id/',
			badges: [],
			location: 'Lubuk Pakam, Indonesia',
			title: 'Fullstack Web Developer',
			logoUrl: KesehatanImg,
			start: 'November 2023',
			end: 'April 2024',
			description:
				'Developed and maintained fullstack web applications for health information systems. Built responsive frontend interfaces using modern JavaScript frameworks and designed backend APIs and database systems. Implemented features for data management, reporting, and user administration. Collaborated with stakeholders to understand requirements and deliver scalable web solutions that improve operational efficiency for the health department.'
		},
		{
			company: 'Sendvitation',
			href: 'https://sendvitation.com',
			badges: [],
			location: 'Medan, Indonesia',
			title: 'Fullstack Software Engineer',
			logoUrl: "https://sendvitation.com/sendvitation.png",
			start: 'Mei 2025',
			end: 'Present',
			description:
				'Developed fullstack web applications handling both frontend and backend development. Deployed applications to production environments and managed deployment pipelines. Performed regular maintenance, bug fixes, and performance optimization to ensure system stability. Continuously updated and enhanced features based on user feedback and business requirements. Built and maintained RESTful APIs, database systems, and responsive user interfaces using modern technologies.'
		},
	],
	education: [
		{
			school: 'STMIK TRIGUNA DHARMA',
			href: 'https://trigunadharma.ac.id',
			degree: 'Bachelor of Information Systems',
			logoUrl: "https://eventkampus.com/data/sekolah/112-8.jpeg",
			start: '2018',
			end: '2023'
		},
		{
			school: 'AWS',
			href: 'https://aws.amazon.com',
			degree: 'Cloud Computing',
			logoUrl: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
			start: 'January 2023',
			end: 'June 2023'
		},
		{
			school: 'Datacamp',
			href: 'https://datacamp.com',
			degree: "Python ",
			logoUrl: "https://www.fditf.com/bi/wp-content/uploads/2021/01/logo-pequeno.jpg",
			start: ' June 2024',
			end: ' December 2024'
		}
	],
	projects: [
		{
			title: 'Portofolio',
			href: 'https://mystorytell.vercel.app/',
			dates: '2024 - Present',
			active: true,
			description:
				'Personal portfolio website showcasing fullstack development and graphic design skills. Features modern design with sections for about, skills, experience, portfolio showcase, and contact information.',
			technologies: [
				'Svelte',
				'SvelteKit',
				'Tailwind CSS',
				'Vite',
				'Radix UI',
				'Magic UI',
				'shadcn/ui',
				'Lucide',
				'Swiper',
				'PWA'
			],
			links: [
				{
					type: 'Website',
					href: 'https://mystorytell.vercel.app/',
					icon: Globe
				}
			],
			image: '',
			video: 'https://image.badcode.biz.id/videos/portofolio.mp4'
		},
		{
			title: 'Image Enhancement & Media API',
			href: 'https://api-image.sendvitation.com/docs',
			dates: '2024 - Present',
			active: true,
			description:
				'Comprehensive REST API service offering multiple image and media processing capabilities. Features include AI-powered image enhancement, background removal, music analysis and generation, OTP management, YouTube audio download, and combination tools. Fully documented with interactive API documentation.',
			technologies: [
				'FastAPI',
				'Python',
				'Uvicorn',
				'React',
				'Swagger UI',
				'jsDelivr'
			],
			links: [
				{
					type: 'Website',
					href: 'https://api-image.sendvitation.com/docs',
					icon: Globe
				}
			],
			image: '',
			video: 'https://image.badcode.biz.id/videos/AIIMAGE.mp4'
		},
		{
			title: 'mailHog',
			href: 'https://mailhog.vercel.app/',
			dates: '2024 - Present',
			active: true,
			description:
				'Temporary email generator service that allows users to create disposable email addresses instantly. Perfect for testing, privacy protection, and avoiding spam on online registrations.',
			technologies: [
				'Svelte',
				'SvelteKit',
				'Tailwind CSS',
				'Vite',
				'Vercel',
				'Radix UI',
				'shadcn/ui',
				'Lucide'
			],
			links: [
				{
					type: 'Website',
					href: 'https://mailhog.vercel.app/',
					icon: Globe
				}
			],
			image: '',
			video: 'https://image.badcode.biz.id/videos/tempmail.mp4'
		},
		{
			title: 'Map Picker',
			href: 'https://mapker.vercel.app/',
			dates: '2024 - Present',
			active: true,
			description:
				'Free and open-source map picker component for Svelte using OpenStreetMap and Leaflet. Features location selection, search functionality, customizable styling, and embed code generation.',
			technologies: [
				'Svelte',
				'SvelteKit',
				'Vite',
				'Leaflet',
				'Geoapify',
				'Vercel',
				'HSTS'
			],
			links: [
				{
					type: 'Website',
					href: 'https://mapker.vercel.app/',
					icon: Globe
				}
			],
			image: '',
			video: 'https://image.badcode.biz.id/videos/MapPicker.mp4'
		},
		{
			title: 'POS Coffee Shop',
			href: 'https://www.beanbill.my.id/',
			dates: '2024 - Present',
			active: true,
			description:
				'All-in-one point-of-sale solution designed specifically for coffee shops. Streamlines operations with order management, real-time analytics, inventory tracking, and integrated payment systems.',
			technologies: [
				'Svelte',
				'SvelteKit',
				'Vite',
				'Vercel',
				'Google Font API'
			],
			links: [
				{
					type: 'Website',
					href: 'https://www.beanbill.my.id/',
					icon: Globe
				}
			],
			image: '',
			video: 'https://image.badcode.biz.id/videos/POS-coffee.mp4'
		},
		{
			title: 'JNE LABEL ANALYZER',
			href: 'https://jne-analyzer.vercel.app/',
			dates: '2024 - Present',
			active: true,
			description:
				'Smart tool to analyze shipping labels and extract package information with costs. Uses AI to process JNE shipping label images and automatically extract sender, recipient, and pricing details.',
			technologies: [
				'Next.js',
				'React',
				'Tailwind CSS',
				'Radix UI',
				'shadcn/ui',
				'Lucide',
				'Vercel',
				'Webpack',
				'Priority Hints'
			],
			links: [
				{
					type: 'Website',
					href: 'https://jne-analyzer.vercel.app/',
					icon: Globe
				}
			],
			image: '',
			video: 'https://image.badcode.biz.id/videos/JNE.mp4'
		},
		{
			title: 'Image Converter',
			href: 'https://imagecv.sendvitation.com/',
			dates: '2024 - Present',
			active: true,
			description:
				'Powerful image conversion tool supporting multiple formats including PNG, JPG, WebP, GIF, and BMP. Features bulk processing up to 30 images, drag & drop interface, and privacy-focused processing.',
			technologies: [
				'Next.js',
				'React',
				'Tailwind CSS',
				'Radix UI',
				'shadcn/ui',
				'Lucide',
				'Vercel',
				'Webpack',
				'Priority Hints'
			],
			links: [
				{
					type: 'Website',
					href: 'https://imagecv.sendvitation.com/',
					icon: Globe
				}
			],
			image: '',
			video: 'https://image.badcode.biz.id/videos/converter.mp4'
		},
		{
			title: 'Self Photobooth',
			href: 'https://photoqu.vercel.app/',
			dates: '2024 - Present',
			active: true,
			description:
				'Interactive photo booth application that allows users to capture photos, customize them, and share with others. Features countdown timer, photo history, and instant sharing capabilities.',
			technologies: [
				'Next.js',
				'React',
				'Tailwind CSS',
				'Radix UI',
				'shadcn/ui',
				'Lucide',
				'Vercel',
				'Webpack',
				'Priority Hints'
			],
			links: [
				{
					type: 'Website',
					href: 'https://photoqu.vercel.app/',
					icon: Globe
				}
			],
			image: '',
			video: 'https://image.badcode.biz.id/videos/photoboot.mp4'
		},
		{
			title: 'Proxy Serverless x Nautica',
			href: 'https://serverless.badcode.biz.id/',
			dates: '2024 - Present',
			active: true,
			description:
				'Serverless proxy service providing location detection, server status monitoring, and domain management. Features IP geolocation, ISP detection, and responsive theme switching.',
			technologies: [
				'Next.js',
				'React',
				'Tailwind CSS',
				'Radix UI',
				'shadcn/ui',
				'Lucide',
				'Vercel',
				'Webpack',
				'Priority Hints'
			],
			links: [
				{
					type: 'Website',
					href: 'https://serverless.badcode.biz.id/',
					icon: Globe
				}
			],
			image: '',
			video: 'https://image.badcode.biz.id/videos/serverless.mp4'
		}
	],
	hackathons: [
		{
			title: 'Hack Western 5',
			dates: 'November 23rd - 25th, 2018',
			location: 'London, Ontario',
			description:
				'Developed a mobile application which delivered bedtime stories to children using augmented reality.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: []
		},
		{
			title: 'Hack The North',
			dates: 'September 14th - 16th, 2018',
			location: 'Waterloo, Ontario',
			description:
				'Developed a mobile application which delivers university campus wide events in real time to all students.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
			links: []
		},
		{
			title: 'FirstNet Public Safety Hackathon',
			dates: 'March 23rd - 24th, 2018',
			location: 'San Francisco, California',
			description:
				'Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.',
			// icon: "public",
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png',
			links: []
		},
		{
			title: 'DeveloperWeek Hackathon',
			dates: 'February 3rd - 4th, 2018',
			location: 'San Francisco, California',
			description:
				'Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg',
			links: [
				{
					title: 'Github',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/cryptotrends/cryptotrends'
				}
			]
		},
		{
			title: 'HackDavis',
			dates: 'January 20th - 21st, 2018',
			location: 'Davis, California',
			description:
				'Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png',
			win: 'Best Data Hack',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
			links: [
				{
					title: 'Devpost',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://devpost.com/software/my6footprint'
				},
				{
					title: 'ML',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/Wallet6/my6footprint-machine-learning'
				},
				{
					title: 'iOS',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/Wallet6/CarbonWallet'
				},
				{
					title: 'Server',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/Wallet6/wallet6-server'
				}
			]
		},
		{
			title: 'ETH Waterloo',
			dates: 'October 13th - 15th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png',
			links: [
				{
					title: 'Organization',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/ethdocnet'
				}
			]
		},
		{
			title: 'Hack The North',
			dates: 'September 15th - 17th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed a virtual reality application allowing users to see themselves in third person.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Streamer Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/justinmichaud/htn2017'
				},
				{
					title: 'Client Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/RTSPClient'
				}
			]
		},
		{
			title: 'Hack The 6ix',
			dates: 'August 26th - 27th, 2017',
			location: 'Toronto, Ontario',
			description:
				'Developed an open platform for people shipping items to same place to combine shipping costs and save money.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/ShareShip/ShareShip'
				},
				{
					title: 'Site',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://share-ship.herokuapp.com/'
				}
			]
		},
		{
			title: 'Stupid Hack Toronto',
			dates: 'July 23rd, 2017',
			location: 'Toronto, Ontario',
			description:
				'Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png',
			links: [
				{
					title: 'Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/nsagirlfriend/nsagirlfriend'
				}
			]
		},
		{
			title: 'Global AI Hackathon - Toronto',
			dates: 'June 23rd - 25th, 2017',
			location: 'Toronto, Ontario',
			description:
				'Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg',
			win: '1st Place Winner',
			links: [
				{
					title: 'Article',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/'
				},
				{
					title: 'Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/TinySamosas/'
				}
			]
		},
		{
			title: 'McGill AI for Social Innovation Hackathon',
			dates: 'June 17th - 18th, 2017',
			location: 'Montreal, Quebec',
			description: 'Developed realtime facial microexpression analyzer using AI',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg',
			links: []
		},
		{
			title: 'Open Source Circular Economy Days Hackathon',
			dates: 'June 10th, 2017',
			location: 'Toronto, Ontario',
			description:
				"Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg',
			win: '1st Place Winner',
			links: [
				{
					title: 'Source',
					icon: Github,
					// icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/genecis'
				}
			]
		},
		{
			title: "Make School's Student App Competition 2017",
			dates: 'May 19th - 21st, 2017',
			location: 'International',
			description: 'Improved PocketDoc and submitted to online competition',
			image:
				'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png',
			win: 'Top 10 Finalist | Honourable Mention',
			links: [
				{
					title: 'Medium Article',
					icon: Github,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a'
				},
				{
					title: 'Devpost',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://devpost.com/software/pocketdoc-react-native'
				},
				{
					title: 'YouTube',
					icon: Youtube,
					// icon: <Icons.youtube className="h-4 w-4" />,
					href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68'
				},
				{
					title: 'Source',
					icon: Github,
					href: 'https://github.com/dillionverma/pocketdoc-react-native'
				}
			]
		},
		{
			title: 'HackMining',
			dates: 'May 12th - 14th, 2017',
			location: 'Toronto, Ontario',
			description: 'Developed neural network to optimize a mining process',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png',
			links: []
		},
		{
			title: 'Waterloo Equithon',
			dates: 'May 5th - 7th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png',
			links: [
				{
					title: 'Devpost',
					icon: Globe,
					// icon: <Icons.globe className="h-4 w-4" />,
					href: 'https://devpost.com/software/pocketdoc-react-native'
				},
				{
					title: 'YouTube',
					icon: Youtube,
					// icon: <Icons.youtube className="h-4 w-4" />,
					href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68'
				},
				{
					title: 'Source',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/pocketdoc-react-native'
				}
			]
		},
		{
			title: 'SpaceApps Waterloo',
			dates: 'April 28th - 30th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png',
			links: [
				{
					title: 'Source',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/earthwatch'
				}
			]
		},
		{
			title: 'MHacks 9',
			dates: 'March 24th - 26th, 2017',
			location: 'Ann Arbor, Michigan',
			description:
				'Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/threejs-planes'
				}
			]
		},
		{
			title: 'StartHacks I',
			dates: 'March 4th - 5th, 2017',
			location: 'Waterloo, Ontario',
			description:
				'Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png',
			win: '1st Place Winner',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source (Mobile)',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/mattBlackDesign/recipic-ionic'
				},
				{
					title: 'Source (Server)',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/mattBlackDesign/recipic-rails'
				}
			]
		},
		{
			title: 'QHacks II',
			dates: 'February 3rd - 5th, 2017',
			location: 'Kingston, Ontario',
			description: 'Developed a mobile game which enables city-wide manhunt with random lobbies',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png',
			mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
			links: [
				{
					title: 'Source (Mobile)',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/dillionverma/human-huntr-react-native'
				},
				{
					title: 'Source (API)',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/mattBlackDesign/human-huntr-rails'
				}
			]
		},
		{
			title: 'Terrible Hacks V',
			dates: 'November 26th, 2016',
			location: 'Waterloo, Ontario',
			description:
				'Developed a mock of Windows 11 with interesting notifications and functionality',
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png',
			links: [
				{
					title: 'Source',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/justinmichaud/TerribleHacks2016-Windows11'
				}
			]
		},
		{
			title: 'Portal Hackathon',
			dates: 'October 29, 2016',
			location: 'Kingston, Ontario',
			description:
				"Developed an internal widget for uploading assignments using Waterloo's portal app",
			image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png',
			links: [
				{
					title: 'Source',
					icon: Github,
					//   // icon: <Icons.github className="h-4 w-4" />,
					href: 'https://github.com/UWPortalSDK/crowmark'
				}
			]
		}
	]
};
