import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";
import Pagination from "./components/Pagination";

function App() {
	const [busqueda, setBusqueda] = useState("");
	const [photos, setPhotos] = useState([]);
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);

	const submitForm = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			setMessage("");
			if (busqueda.trim() === "") {
				setMessage("Ingresa un termino de búsqueda");
				return;
			}
			const url = `https://api.unsplash.com/search/photos?page=${page}&query=${busqueda}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
			const res = await fetch(url);
			const data = await res.json();
			setPhotos(data.results);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const onPagination = async () => {
		const url = `https://api.unsplash.com/search/photos?page=${page}&query=${busqueda}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
		const res = await fetch(url);
		const data = await res.json();
		setPhotos(data.results);
	};

	useEffect(() => {
		if (page > 1) {
			// run code
			onPagination();
		} else {
			return;
		}
	}, [page]);

	return (
		<div className="container mx-auto">
			<h1 className="text-2xl mt-10">Unsplash API</h1>
			<Formulario
				busqueda={busqueda}
				setBusqueda={setBusqueda}
				submitForm={submitForm}
			/>
			{message && <p className="text-red-500">{message}</p>}
			{loading ? <p>Cargando...</p> : <ListadoImagenes photos={photos} />}
			<Pagination page={page} photos={photos} setPage={setPage} />
		</div>
	);
}

export default App;
