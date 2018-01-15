import React, { Component } from 'react'
import Head from '../components/Head'
import Header from '../components/Header'
import fetch from 'isomorphic-unfetch'

export default class About extends Component {
	static async getInitialProps() {
		const res =
			await fetch('https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc')
				.then(res => res.json())
		return { repositoryData: res }
	}
	render() {
		const repos = this.props.repositoryData.items.map((r, i) => (
			<li key={i}>
				<a href={r.html_url} target='_blank'>{r.full_name}</a>
			</li>
		))
		return (
			<div>
				<Head />
				<Header />
				<h1>about.js</h1>
				<p>https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc</p>
				<ol>{repos}</ol>
			</div>
		)
	}
}