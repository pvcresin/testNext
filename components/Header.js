import React from 'react'
import Link from 'next/link'

export default () => {
	const links = [{
		dir: '/',
		name: 'Home'
	}, {
		dir: '/about',
		name: 'About'
	}].map((l, i) => (
		<li key={i}>
			<Link href={l.dir} prefetch>
				<a>{l.name}</a>
			</Link>
		</li>
	))
	return (
		<header>
			<nav>
				<ul>{links}</ul>
			</nav>
		</header>
	)
}