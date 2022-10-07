import React from "react";

const Pagination = ({ page, photos, setPage }) => {
	return (
		<div className="flex justify-between p-2">
			{page > 1 && (
				<span
					className="border rounded p-1 cursor-pointer"
					onClick={() => setPage(page - 1)}>
					Prev
				</span>
			)}
			{photos.length > 0 && (
				<span
					className="border rounded p-1 cursor-pointer"
					onClick={() => setPage(page + 1)}>
					Next
				</span>
			)}
		</div>
	);
};

export default Pagination;
