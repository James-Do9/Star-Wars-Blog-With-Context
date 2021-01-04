const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planet: [],
			favorites: []
		},
		actions: {
			loadInitialData: () => {
				//do the main fetch
				//use setStore instead of setState
				fetch("https://www.swapi.tech/api/people/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => setStore({ people: jsonifiedResponse.results }))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
				fetch("https://www.swapi.tech/api/planets/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => setStore({ planet: jsonifiedResponse.results }))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			addToFavorites: (uid, details) => {
				const currentStore = getStore();
				const newFavorites = currentStore.favorites.concat({
					details: details,
					uid: uid
				});
				setStore({ favorites: newFavorites });
			},
			deleteFromFavorites: name => {
				const currentStore = getStore();
				const newFavorites = currentStore.favorites.filter(index => index != name);
				setStore({ favorites: newFavorites });
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
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
