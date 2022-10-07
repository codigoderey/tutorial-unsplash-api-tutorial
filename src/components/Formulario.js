const Formulario = ({ busqueda, setBusqueda, submitForm }) => {
	return (
		<div>
			<form onSubmit={submitForm}>
				<div className="flex flex-col mt-4">
					<label>Ingresa un valor</label>
					<input
						className="border border-gray-400 p-2 rounded mt-2 w-1/2"
						type="text"
						placeholder="Busca una imagen, ejemplo: futbol o café"
						onChange={(e) => setBusqueda(e.target.value)}
						value={busqueda}
					/>
					<button
						className="inline bg-teal-500 rounded-sm w-1/4 mt-4 text-white p-2 hover:bg-teal-600 transition-all"
						type="submit">
						Buscar
					</button>
				</div>
			</form>
		</div>
	);
};

export default Formulario;
