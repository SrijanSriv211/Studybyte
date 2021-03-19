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
	let Query = localStorage.getItem("Lowercase");
	document.title = Original_Query + " - Studybyte";

	var CountHiddenLinks = 0;
	const Chars = [" ", "-", "_"]
	const NameOfLinks = document.getElementById("LinkList").getElementsByTagName("li");
	for (var Check in Chars)
	{
		if (Query.includes(Chars[Check])) Query = Query.split(Chars[Check]).join("-");
	}

	if (Query == undefined) window.location = "Studybyte_ERROR.html";
	for (var i = 0; i < NameOfLinks.length; i++)
	{
		if (NameOfLinks[i].id != Query)
		{
			document.getElementById(NameOfLinks[i].id).style.display = "none";
			CountHiddenLinks++;
		}
	}

	if (CountHiddenLinks == NameOfLinks.length) window.location = "Studybyte_ERROR.html";
}

function Showerror()
{
	let Original_Query = localStorage.getItem("Original");
	document.getElementById("Searchterm").innerHTML = "Your search term was \"" + Original_Query + "\".";
	document.title = Original_Query + " - Studybyte";
}
