function IsEnter()
{
	// Checking whether Enter is pressed or not?
	if (event.keyCode == 13) Studybyte_search();
}

function Studybyte_search()
{
	var Original_Data = document.getElementById("GetValue").value;
	var Lowercase_Data = Original_Data.toLowerCase();
	try
	{
		localStorage.setItem("Original", Original_Data);
		localStorage.setItem("Lowercase", Lowercase_Data);
		window.location = "Studybyte_RESULTS.html";
	}

	catch (err) { window.location = "Studybyte_ERROR.html"; }
}

function Studybyte_result()
{
	let Original_Query = localStorage.getItem("Original");
	let Lowercase_Query = localStorage.getItem("Lowercase");
	document.title = Original_Query + " - Studybyte";

	const NameOfLinks = document.getElementById("LinkList").getElementsByTagName("ul");

	var Link;
	var Query = Lowercase_Query;
	const Chars = [" ", "-", "_"]
	const Queries = [
		["class5", "class-5"],
		["class6", "class-6"],
		["class7", "class-7"],
		["class8", "class-8"],
		["class9", "class-9"],
		["class10", "class-10"],
		["class11", "class-11"],
		["class12", "class-12"],
		["science", "science"],
		["evs", "evs"],
		["maths", "maths"],
		["maths", "mathmatics"],
		["english", "english"],
		["hindi", "hindi"]
	];

	for (var Check in Chars)
	{
		if (Lowercase_Query.includes(Chars[Check]) == false && Check == 2) break;
		else if (Lowercase_Query.includes(Chars[Check])) Query = Query.split(Chars[Check]).join("");
	}

	for (var Keys in Queries)
	{
		if (Query.includes(Queries[Keys][0])) Link = Queries[Keys][1];
	}

	if (Link == undefined) window.location = "Studybyte_ERROR.html";
	for (var i = 0; i < NameOfLinks.length; i++)
	{
		if (NameOfLinks[i].id != Link) document.getElementById(NameOfLinks[i].id).style.display = "none";
	}
}

function Showerror()
{
	let Original_Query = localStorage.getItem("Original");
	document.getElementById("Searchterm").innerHTML = "Your search term was \"" + Original_Query + "\".";
	document.title = Original_Query + " - Studybyte";
}
