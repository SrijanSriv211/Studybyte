function IsEnter() { if (event.keyCode == 13) Studybyte_search(); }
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

	var Link;
	var Title;

	var href;
	var Key = [];
	var Keyword = document.getElementById('Database').getElementsByTagName('a');

	var Query = Lowercase_Query;
	var Chars = [" ", "-", "_"]
	var Queries = [
		["class7", "Class 7", "class7"],
		["class8", "Class 8", "youtube"],
		["class9", "Class 9", "class9"],
		["class10", "Class 10", "class10"],
		["class11", "Class 11", "class11"],
		["class12", "Class 12", "class12"]
	];

	for (var Check in Chars)
	{
		if (Lowercase_Query.includes(Chars[Check]) == false && Check == 2) break;
		else if (Lowercase_Query.includes(Chars[Check])) Query = Query.split(Chars[Check]).join("");
	}

	for (var items in Queries)
	{
		if (Query.includes(Queries[items][0]))
		{
			Title = Queries[items][1];
			Link = Queries[items][2];
		}
	}

	if (Title == undefined || Link == undefined) window.location = "Studybyte_ERROR.html";

	Array.from(Keyword).forEach(function(element)
	{
		href = element.href;
		if (href.includes(Link)) Key.push(href);
	})

	document.getElementById("links").innerHTML = Title;
	document.getElementById("links").href = Key[0];
}

function Showerror()
{
	let Original_Query = localStorage.getItem("Original");
	document.getElementById("Searchterm").innerHTML = "Your search term was \"" + Original_Query + "\".";
	document.title = Original_Query + " - Studybyte";
}
