import '../styles/filter.css';

const Filters = () => {
	return (
		<aside className='filter-container'>
			<span className='hey'></span>
			<h2>Filters</h2>
			<ul>
				<li>inbox</li>
				<li>draft</li>
				<li>spam</li>
				<li>trash</li>
			</ul>
		</aside>
	);
};

export default Filters;
