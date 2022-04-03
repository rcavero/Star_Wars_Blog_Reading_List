import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import { Context } from "../store/appContext"

export const Home = () => {
	// const [characters, setCharacters] = useState([]);

	// useEffect(()=>{
	// 	fetch("https://www.swapi.tech/api/people")
	// 		.then((response) => response.json())
	// 		.then((response) => {
	// 			setCharacters(response.results)
	// 		})
	// },[])
	// console.log(characters[0])
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getCharacters()
	}, [])

	// console.log(store.characters[0].name);

	return store.characters ? (
		<div className="container">
			<h1 className="text-danger mb-4">Characters</h1>
			<div className="row row-cols-1 row-cols-md-4 g-4">
				{store.characters.map((value, index) => {
					return (
						<div key={index} className="col">
							<div className="card">
								<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{value.name}</h5>
									<p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
									<div className="d-flex justify-content-between">
										<button type="button" class="btn btn-outline-primary">Learn more!</button>
										<button type="button" class="btn btn-outline-warning" onClick={(e)=>{
											actions.addFavorite(value.name)
										}}>Like</button>
									</div>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	) : <h1>Not found</h1>;
}
	// <div className="text-center mt-5">
	// 	<h1>Hello Rigo!</h1>
	// 	<p>
	// 		<img src={rigoImage} />
	// 	</p>
	// 	<a href="#" className="btn btn-success">
	// 		If you see this green button, bootstrap is working
	// 	</a>
	// </div>

