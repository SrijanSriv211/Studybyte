function Database()
{
	const Index = [
		["Studybyte", "https://SrijanSriv211.github.io/Studybyte"],
		["SrijanSriv211 (SrijanSriv211) · GitHub", "https://github.com/SrijanSriv211"],
		["SrijanSriv211/Glass - Github", "https://github.com/SrijanSriv211/Glass"],
		["SrijanSriv211/Studybyte - Github", "https://github.com/SrijanSriv211/Studybyte"],
		["SrijanSriv211/Hexa - Github", "https://github.com/SrijanSriv211/Hexa"],
		["SrijanSriv211/AOs - Github", "https://github.com/SrijanSriv211/AOs"]
	];

	var Link;
	var NewItem;

	let List = document.getElementById("LinkList");

	for (var i = 0; i < Index.length; i++)
	{
		Link = document.createElement("a");
		NewItem = document.createElement("li");

		Link.textContent = Index[i][0];
		Link.setAttribute('href', Index[i][1]);

		NewItem.appendChild(Link);
		List.appendChild(NewItem);
	}
}
