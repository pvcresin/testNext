import React, { Component } from 'react'
import Head from '../components/Head'
import Header from '../components/Header'

export default class App extends Component {
	render() {
		return (
			<div>
				<Head />
				<Header />
				<h1>index.js</h1>
				<img src="/static/zeit.svg" width='300px' />
				<a href="/">link!!</a>
				<style jsx>{`
					a {
						background: red;
					}
				`}</style>
				<style global jsx>{`
					* {
						box-sizing: border-box;
					}
					body {
						background: cyan;
					}
					a {
						background: orange;
					}
				`}</style>
			</div>
		)
	}
}