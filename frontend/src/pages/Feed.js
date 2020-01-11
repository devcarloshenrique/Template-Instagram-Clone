import React, { Component } from 'react';
import api from '../services/api';
import io from 'socket.io-client';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
// state criado para armazenar informações dentro do componente 
	state  = {
		feed: [],
	};

// Quando um componente é escrito em formato de class, todo componente nesse formato tema acesso a este metodo
	async componentDidMount() {
		this.registerToSocket();

		const response = await api.get('posts');

		this.setState({ feed: response.data })
	}

	registerToSocket = () => {
		const socket = io('http://localhost:80');

		socket.on('post', newPost => {
			this.setState({ feed: [newPost, ...this.state.feed]})
		})

		socket.on('like', likedPost => {
			this.setState({
			 feed: this.state.feed.map(post => 
			 	post._id === likedPost._id ? likedPost : post
			 )
			});
		})
	}

	handleLike = id => {
		api.post(`/posts/${id}/like`); 
	}

// Quando á class é criada deste modo é obrigatorio retornar o metodo render()
	render() {
		return (
			<section id="post-list">

			{ this.state.feed.map(post => (
						
				<article key={post._id}>
					<header>
						<div className="user-info">
							<span>{post.author}</span>
							<span className="place">{post.place}</span>
						</div>

						<img src={more} alt="Mais"/>
					</header>

						<img src={`http://localhost:80/files/${post.image}`} alt="" />

						<footer>
							<div className="actions">.
								<button type="button" onClick={ () => this.handleLike(post._id)}>
									<img src={like} />
								</button>
								<img src={comment} />
								<img src={send} />
							</div>

							<strong>{post.likes} curtidas </strong>

							<p>{post.description}
								<span>{post.hashtags}</span>
							</p>
						</footer>
				</article>

				))}
			
			</section>

		)
	}
}

export default Feed;