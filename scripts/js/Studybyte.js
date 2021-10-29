// This function will check whether Enter key is pressed or not?
function IsEnter()
{
	let Original_Data = document.getElementById("Searchbar").value;

	// Call "Studybyte_search" function.
	// If Enter key is pressed and search query is not an empty string.
	if (Original_Data != "")
	{
		if (event.keyCode == 13) TryToSearch();
	}
}

// This function will focus the searchbar when Escape key is pressed.
function FocusSearchbarOnEsc()
{
	let Searchbar = document.getElementById("Searchbar");
	document.addEventListener("keyup", function(e)
	{
		let isFocused = (document.activeElement === Searchbar);
		if (!isFocused)
		{
			if (event.keyCode == 191)
				Searchbar.focus();
		}

		else if (isFocused)
		{
			if (event.keyCode == 27)
				Searchbar.blur();
		}
	});
}

// This function will be used to for search tags.
function SearchTags(Query, SearchTag, Link)
{
	if (Query.startsWith(SearchTag))
	{
		let Search_Query = Query.replace(SearchTag, "");
		window.open(Link + Search_Query.trim(), "_blank");

		return true;
	}

	else return false;
}

// This function will try to send all of the data to results page.
function TryToSearch()
{
	// These variables will send data from the search box.
	let OriginalQuery = document.getElementById("Searchbar").value;
	let FormattedQuery = OriginalQuery.toLowerCase().trim();

	// This piece of code will try to send all of the data to results page,
	// and if it's not possible then send to error page.
	if (OriginalQuery != "")
	{
		try
		{
			if (SearchTags(FormattedQuery, "g?", "https://www.google.com/search?q="));
			else if (SearchTags(FormattedQuery, "yt?", "https://www.youtube.com/results?search_query="));
			else if (SearchTags(FormattedQuery, "eb?", "https://www.britannica.com/search?query="));
			else if (SearchTags(FormattedQuery, "git?", "https://github.com/search?q="));
			else if (SearchTags(FormattedQuery, "bing?", "https://www.bing.com/search?q="));
			else if (SearchTags(FormattedQuery, "pdfdrive?", "https://www.pdfdrive.com/search?q="));
			else if (SearchTags(FormattedQuery, "ddg?", "https://duckduckgo.com/?q="));
			else if (SearchTags(FormattedQuery, "gs?", "https://scholar.google.com/scholar?q="));
			else if (FormattedQuery.includes("+") || FormattedQuery.includes("-") || FormattedQuery.includes("*") || FormattedQuery.includes("x") || FormattedQuery.includes("/"))
			{
				let CalculatedAns = ColorCalc(FormattedQuery);
				if (isNaN(CalculatedAns))
				{
					// Redirect the user to the results page, then rank and show results accordingly.
					localStorage.setItem("OriginalQuery", OriginalQuery);
					localStorage.setItem("FormattedQuery", FormattedQuery);
					window.location = "r.html";
				}

				else if (!isNaN(CalculatedAns))
				{
					let Expr = OriginalQuery.replace(/\s+/g, " ").trim();
					localStorage.setItem("OriginalQuery", OriginalQuery);
					localStorage.setItem("FormattedQuery", FormattedQuery);
					document.title = Expr + " - Studybyte";
					alert(Expr + " = " + CalculatedAns);
				}
			}

			else if (FormattedQuery == "studybyte.old") window.location = "Studybyte.Old.html";
			else if (FormattedQuery == "studybyte in 2007") alert("Back in 2007 the Creator of Studybyte was born, but the Idea of Studybyte was not born yet.");
			else if ((FormattedQuery.includes("coin") && FormattedQuery.includes("flip")) || (FormattedQuery.includes("coin") && FormattedQuery.includes("toss")))
			{
				let Random_num = Math.round(Math.random());
				if (Random_num == 0) alert("Coin flip: Heads");
				else alert("Coin flip: Tales");
			}

			else
			{
				// Redirect the user to the results page, then rank and show results accordingly.
				localStorage.setItem("OriginalQuery", OriginalQuery);
				localStorage.setItem("FormattedQuery", FormattedQuery);
				window.location = "r.html";
			}
		}

		catch (err)
		{
			window.location = "e.html";
		}
	}
}

function GetResults()
{
	// Retrive all indexed pages.
	let Data = Database();
	let SearchIndex = [];
	let History = [];

	// Convert that indexed pages dict into a list.
	for (let i = 0; i < Data.length; i++)
		SearchIndex.push([Data[i].Title, Data[i].URL]);

	// Change the Title.
	let NumOFResults = 0;
	let ListResults = [];
	let ListOfSites = [];

	// Retrive the query.
	let OriginalQuery = localStorage.getItem("OriginalQuery");
	let FormattedQuery = localStorage.getItem("FormattedQuery");
	document.title = OriginalQuery + " - Studybyte";

	// Check for any edge cases.
	if (FormattedQuery == "" || FormattedQuery == null || FormattedQuery == undefined)
		window.location = "index.html";

	// Get all the titles of all indexed pages.
	for (let i = 0; i < SearchIndex.length; i++)
		ListOfSites.push(SearchIndex[i][0]);

	// Color is the main algorithm behind searching and giving results for query in Studybyte search engine.
	ListResults = Color(FormattedQuery, ListOfSites);
	NumOFResults = ListResults.length;
	for (let i = 0; i < ListResults.length; i++)
	{
		for (let a = 0; a < ListOfSites.length; a++)
		{
			if (ListResults[i][1] == ListOfSites[a])
			{
				ColorRender(SearchIndex[a][0], SearchIndex[a][1]);
			}
		}
	}

	// This piece of code will check whether the number of hidden links are equal to total number of links, and if yes or if the Query is undefined then send to "ERROR" page.
	if (NumOFResults == 0 || FormattedQuery == undefined || FormattedQuery == null) window.location = "e.html";
	document.getElementById("NumOfResults").innerHTML = NumOFResults + " results found!"; // This piece of code will Change some window properties.
	document.getElementById("Searchbar").value = OriginalQuery;

	// Save everything in the History.
	// Retrive the search history.
	if (localStorage.getItem("UserHistory") != null || localStorage.getItem("UserHistory") != undefined)
		History = JSON.parse(localStorage.getItem("UserHistory"));

	History.push(OriginalQuery);
	History.reverse();
	History = History.filter(function(item, index, inputarr) {
		return inputarr.indexOf(item) == index;
	});

	localStorage.setItem("UserHistory", JSON.stringify(History));
}

// If you are redirected to "ERROR" page then this function will add the Original_Query to "Your search term was" and render it.
function Showerror()
{
	// Set the value of search term which was given in the search box.
	let Query = localStorage.getItem("OriginalQuery");

	document.getElementById("Searchbar").value = Query;
	document.title = Query + " - Studybyte"; // Change the title of the page.
}

// This function will Scroll the window to the TOP.
function ScrollToTOP()
{
	window.scrollTo(0, 0);
}

// This function will make the scroll to top button visible or invisivle
function ScrollToTOP_Properties()
{
	let SCROLLToTOP_Button = document.getElementById("ScrollToTop");
	window.addEventListener('scroll', function()
	{
		if (document.documentElement.scrollTop > 500)
		{
			SCROLLToTOP_Button.style.visibility = "visible";
			SCROLLToTOP_Button.style.opacity = "1";
		}
		
		else
		{
			SCROLLToTOP_Button.style.opacity = "0";
			SCROLLToTOP_Button.style.visibility = "hidden";
		}
	}, true);
}

// This function will retrive the user history and list it on the history page.
function GetHistory()
{
	let NoHistory = document.getElementById("NoSearchHistory");
	NoHistory.style.visibility = "hidden";

	let ClearHistoryBtn = document.getElementById("ClearHistory");
	ClearHistoryBtn.style.visibility = "visible";

	if (localStorage.getItem("UserHistory") != null || localStorage.getItem("UserHistory") != undefined)
	{
		let HistoryList = JSON.parse(localStorage.getItem("UserHistory")); // Retrive the history list.
		
		// This will render the history.
		for (let i = 0; i < HistoryList.length; i++)
		{
			let li = document.createElement("li");
			let SearchList = document.getElementById("ListHistory");

			li.textContent = HistoryList[i];
			li.addEventListener("click", function()
			{
				let OriginalQuery = HistoryList[i];
				let FormattedQuery = HistoryList[i].toLowerCase().trim();
				localStorage.setItem("OriginalQuery", OriginalQuery);
				localStorage.setItem("FormattedQuery", FormattedQuery);
				window.location = "r.html";
			});

			SearchList.appendChild(li);
		}
	}

	else
	{
		NoHistory.style.visibility = "visible";
		ClearHistoryBtn.style.visibility = "hidden";
	}
}

function ClearUserHistory()
{
	localStorage.removeItem("UserHistory");
	window.location.reload();
}
