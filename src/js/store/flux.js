const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			favoritesList: []
		},
		actions: {
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(resp => resp.json())
					.then(resp => setStore({characters: resp.results}))
					.catch(error => console.log("There was an error loading the characters from de API"))
			},
			addFavorite: (character) => {
				const store = getStore()
				if(!store.favoritesList.includes(character)){
					store.favoritesList.push(character)
					setStore({favoritesList: store.favoritesList})
				}else{
					console.log("Hacer que elimine el elemento")
					const newList = store.favoritesList.filter(elmnt => elmnt != character)
					console.log(newList)
					setStore({favoritesList: newList})
				}
				console.log(store.favoritesList)
				console.log(store.favoritesList.length)
				
			
				
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
