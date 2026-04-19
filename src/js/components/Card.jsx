const Card = (props) => {
	return (
		<div className="card h-100">
			<img
				src={props.image}
				className="card-img-top"
				alt={props.title}
			/>
			<div className="card-body d-flex flex-column">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href="#" className="btn btn-primary mt-auto">
					{props.buttonText}
				</a>
			</div>
		</div>
	);
};

export default Card;