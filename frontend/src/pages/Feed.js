import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
	// Quando á class é criada deste modo é obrigatorio retornar o metodo render()
	render() {
		return (
			<section id="post-list">
				<article>
					<header>
						<div className="user-info">
							<span>devcarloshenrique</span>
							<span className="place">Diretamente do nordeste para o mundo</span>
						</div>

						<img src={more} alt="Mais"/>
					</header>

						<img src="http://localhost:80/files/beat.jpg" alt="" />

						<footer>
							<div className="actions">
								<img src={like} />
								<img src={comment} />
								<img src={send} />
							</div>

							<strong>900 curtidas </strong>

							<p>InstaClone já é uma realidade.
								<span>#clone #insta #InstaClone #top</span>
							</p>
						</footer>
				</article>

				<article>
					<header>
						<div className="user-info">
							<span>devcarloshenrique</span>
							<span className="place">Diretamente do nordeste para o mundo</span>
						</div>

						<img src={more} alt="Mais"/>
					</header>

						<img src="http://localhost:80/files/beat.jpg" alt="" />

						<footer>
							<div className="actions">
								<img src={like} />
								<img src={comment} />
								<img src={send} />
							</div>

							<strong>900 curtidas </strong>

							<p>InstaClone já é uma realidade.
								<span>#clone #insta #InstaClone #top</span>
							</p>
						</footer>
				</article>
			</section>
		)
	}
}

export default Feed;