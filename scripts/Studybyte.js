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

	var Link;
	var Title = [];

	var href;
	var Key = [];
	var Keyword = document.getElementById('Database').getElementsByTagName('a');

	var Query = Lowercase_Query;
	var Chars = [" ", "-", "_"]
	var Queries = [
		["class5", "class-5"],
		["class6", "class-6"],
		["class7", "class-7"],
		["class8", "class-8"],
		["class9", "class-9"],
		["class10", "class-10"],
		["class11", "class-11"],
		["class12", "class-12"]
	];

	var Sitename = [
		[
		"NCERT Solutions for Class 5 - Learn CBSE",
		"NCERT Solutions for Class 5 Maths",
		"NCERT Solutions for Class 5 EVS",
		"NCERT Solutions for Class 5 English",
		"NCERT Solutions for Class 5 Hindi"
		],
		["Class 6"],
		["Class 7"],
		[
		"NCERT Solutions for Class 8 - Learn CBSE",
		"NCERT Solutions for Class 8 Maths",
		"NCERT Solutions for Class 8 Science",
		"NCERT Solutions for Class 8 English",
		"NCERT Solutions for Class 8 Hindi"
		],
		["Class 9"],
		["Class 10"],
		["Class 11"],
		["Class 12"]
	]

	for (var Check in Chars)
	{
		if (Lowercase_Query.includes(Chars[Check]) == false && Check == 2) break;
		else if (Lowercase_Query.includes(Chars[Check])) Query = Query.split(Chars[Check]).join("");
	}

	for (var items in Queries)
	{
		if (Query.includes(Queries[items][0])) Link = Queries[items][1];
	}

	for (var List in Sitename)
	{
		for (var KeyCode in Queries)
		{
			if (Queries[KeyCode][1] == Link) Title[List] = Sitename[KeyCode][List];
		}
	}

	if (Title == undefined || Link == undefined) window.location = "Studybyte_ERROR.html";
	Array.from(Keyword).forEach(function(element)
	{
		href = element.href;
		if (href.includes(Link)) Key.push(href);
	})

	document.getElementById("links1").innerHTML = Title[0];
	document.getElementById("links1").href = Key[0];

	document.getElementById("links2").innerHTML = Title[1];
	document.getElementById("links2").href = Key[1];

	document.getElementById("links3").innerHTML = Title[2];
	document.getElementById("links3").href = Key[2];

	document.getElementById("links4").innerHTML = Title[3];
	document.getElementById("links4").href = Key[3];

	document.getElementById("links5").innerHTML = Title[4];
	document.getElementById("links5").href = Key[4];
}

function Showerror()
{
	let Original_Query = localStorage.getItem("Original");
	document.getElementById("Searchterm").innerHTML = "Your search term was \"" + Original_Query + "\".";
	document.title = Original_Query + " - Studybyte";
}
