import React from "react";
const subway = [
	{
		name: "Арбатская",
		code: "Arbat",
	},
	{
		name: "Александровский сад",
		code: "Alexanders Garden",
	},
	{
		name: "Московская",
		code: "Moscow",
	},
	{
		name: "Парк Культуры",
		code: "Culture",
	},
	{
		name: "Театральная",
		code: "Theater",
	},
];

const FilterCafes = () => {
	return (
		<div className="controls">
			<select name="subway" id="subway">
				<option value="All">Все</option>
				{subway.map((s, i) => {
					return (
						<option value={s.code} key={i}>
							{s.name}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default FilterCafes;
