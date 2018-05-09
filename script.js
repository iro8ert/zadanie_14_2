

var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarnoksiężnikach',
		image: {
			src: 'https://cdn.cnn.com/cnnnext/dam/assets/150603101401-harry-potter-then-now-watson-super-169.jpg'
		}
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'film o lwach',
		image: {
			src: 'https://images-na.ssl-images-amazon.com/images/I/41nB6Gn6bWL.jpg'
		}
	},

	{
		id: 3,
		title: 'Star Wars',
		desc: 'film o wojnach i gwiazdach',
		image: {
			src: 'https://denverartmuseum.org/sites/default/files/slides/Media%20browser/R2-D2_C-3PO.jpg'
		}
	},

	{
		id: 4,
		title: 'Indiana Jones',
		desc: 'film o Indianie Dżonsie',
		image: {
			src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeWTgPkv5kHTa1bR6iOIUTS0xaJfPak4KXn6qV483KDoibHkXt0w'
		}
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie. title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.image.src})
		);
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));