// This function will check whether Enter key is pressed or not?
function IsEnter()
{
	const Original_Data = document.getElementById("Searchbar");

	// Call "Studybyte_search" function.
	// If Enter key is pressed and search query is not an empty string.
	if (Original_Data.value != "")
	{
		if (event.keyCode == 13)
			TryToSearch();
	}
}

// This function will focus the searchbar when Escape key is pressed.
function FocusSearchbarOnEsc()
{
	const Searchbar = document.getElementById("Searchbar");
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
	const OriginalQuery = document.getElementById("Searchbar").value;
	const FormattedQuery = OriginalQuery.toLowerCase().trim();

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
			else if (FormattedQuery == "studybyte.old") window.location = "./includes/Studybyte.Old.html";
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
	const Data = Database();
	let SearchIndex = [];
	let ListResults = [];
	let ListOfSites = [];
	let History = [];

	// Retrive the query and Change the Title.
	const OriginalQuery = localStorage.getItem("OriginalQuery");
	const FormattedQuery = localStorage.getItem("FormattedQuery");
	document.title = OriginalQuery + " - Studybyte";

	// Peform basic arithmetic calculations.
	let CalculatedAns = 0;
	if ((/[()+/*-.,%^]/).test(FormattedQuery))
	{
		CalculatedAns = ColorCalc(FormattedQuery);
		if (!isNaN(CalculatedAns))
		{
			// Format the string.
			const MultiplySign = OriginalQuery.replace("x", "*").trim();
			const Format = MultiplySign.replace(/[a-zA-z!\"#$&':;<=>?@[\\\]_`{|}~·]/g, "");
			const Expr = Format.replace(/\s+/g, "").split("").join(" ");

			// Render calculated answer.
			const li = document.createElement("li");
			const SiteList = document.getElementById("Results");
			li.setAttribute("id", "CalculatedAns");
			li.textContent = Expr + " = " + CalculatedAns;
			SiteList.appendChild(li);
		}
	}

	// Check for any edge cases.
	if (FormattedQuery == "" || FormattedQuery == null || FormattedQuery == undefined || FormattedQuery == NaN)
		window.location = "index.html";

	// Convert that indexed pages dict into a list.
	for (let i = 0; i < Data.length; i++)
		SearchIndex.push([Data[i].Title, Data[i].URL]);

	// Code snippet from:
	// https://stackoverflow.com/questions/7848004/get-column-from-a-two-dimensional-array/63860734
	const arrayColumn = (arr, n) => arr.map(x => x[n]);

	// Color is the main algorithm behind searching and giving results for query in Studybyte search engine.
	ListOfSites = arrayColumn(SearchIndex, 0);
	let StartTime = performance.now();

	ListResults = Color(FormattedQuery, ListOfSites);

	let EndTime = performance.now();
	let NumOFResults = ListResults.length;

	// Render all matching results.
	function RenderResults(StartNum, InitMaxResults)
	{
		let IterNum = StartNum + InitMaxResults;
		for (let i = StartNum; i < IterNum; i++)
		{
			if (ListOfSites.includes(ListResults[i][1]))
			{
				let indexOfSite = arrayColumn(SearchIndex, 0).indexOf(ListResults[i][1]);
				ColorRender(SearchIndex[indexOfSite][0], SearchIndex[indexOfSite][1]);
			}
		}
	}

	// Handle the scrollbar for infinite scroll.
	function HandleScroll(InitMaxResults)
	{
		// TODO: Fix this code, it is repeating a few pages in results.
		let RenderResultsIteration = InitMaxResults;
		document.addEventListener("scroll", function()
		{
			const WindowHeight = document.scrollingElement.scrollTop + document.scrollingElement.clientHeight;
			const ScrollbarHeight = document.body.clientHeight - 1;
			if (WindowHeight >= ScrollbarHeight)
			{
				try
				{
					RenderResults(RenderResultsIteration, InitMaxResults);
					RenderResultsIteration += InitMaxResults;
				}

				catch (err)
				{
					RenderResults(RenderResultsIteration, NumOFResults - RenderResultsIteration);
					RenderResultsIteration += InitMaxResults;
				}
			}
		}, true);

		document.getElementById("ShowMore").addEventListener("click", function()
		{
			try
			{
				RenderResults(RenderResultsIteration, InitMaxResults);
				RenderResultsIteration += InitMaxResults;
			}

			catch (err)
			{
				RenderResults(RenderResultsIteration, NumOFResults - RenderResultsIteration);
				RenderResultsIteration += InitMaxResults;
			}
		}, true);
	}

	// Render all matching results.
	// If the number of ranked pages is smaller than Maximum results, then just render results.
	// Otherwise enable infinite scrolling and show more.
	const MaxResults = parseInt((window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) / 100);
	if (NumOFResults <= MaxResults) RenderResults(0, NumOFResults);
	else
	{
		RenderResults(0, MaxResults);
		HandleScroll(MaxResults);
	}

	// This piece of code will check whether the number of hidden links are equal to total number of links, and if yes or if the Query is undefined then send to "ERROR" page.
	if (isNaN(CalculatedAns) && NumOFResults == 0 || FormattedQuery == undefined || FormattedQuery == null || FormattedQuery == NaN)
		window.location = "e.html";

	// This piece of code will Change some window properties.
	let TimeTaken = EndTime - StartTime;
	let Seconds = (((TimeTaken % 60000) / 1000).toFixed(2));

	// Modify Searchbar and Num of results.
	document.getElementById("Searchbar").value = OriginalQuery;
	NumOfResultsElement = document.getElementById("NumOfResults");
	if (NumOFResults == 0)
		NumOfResultsElement.innerHTML = "1 result (" + Seconds + " seconds)";

	else
		NumOfResultsElement.innerHTML = "About " + NumOFResults + " results (" + Seconds + " seconds)";

	// Retrive and Save the Search History.
	if (localStorage.getItem("UserHistory") != null || localStorage.getItem("UserHistory") != undefined)
		History = JSON.parse(localStorage.getItem("UserHistory"));

	// Save the search query in History.
	History.push(OriginalQuery);
	History.unshift(History.pop());
	History = History.filter(function(item, index, inputarr) {
		return inputarr.indexOf(item) == index;
	});

	localStorage.setItem("UserHistory", JSON.stringify(History));
}

// If you are redirected to "ERROR" page then this function will add the Original_Query to "Your search term was" and render it.
function Showerror()
{
	// Set the value of search term which was given in the search box.
	const OriginalQuery = localStorage.getItem("OriginalQuery");
	const FormattedQuery = localStorage.getItem("FormattedQuery");

	// Check for any edge cases.
	if (FormattedQuery == "" || FormattedQuery == null || FormattedQuery == undefined || FormattedQuery == NaN)
		window.location = "index.html";

	else
	{
		document.getElementById("Searchbar").value = OriginalQuery;
		document.title = OriginalQuery + " - Studybyte"; // Change the title of the page.
	}
}

// This function will Scroll the window to the TOP.
function ScrollToTOP()
{
	window.scrollTo(0, 0);
}

// This function will make the scroll to top button visible or invisivle
function ScrollToTOP_Properties()
{
	const SCROLLToTOP_Button = document.getElementById("ScrollToTop");
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
	const NoHistory = document.getElementById("NoSearchHistory");
	NoHistory.style.visibility = "hidden";

	const ClearHistoryBtn = document.getElementById("ClearHistory");
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
	localStorage.removeItem("OriginalQuery");
	localStorage.removeItem("FormattedQuery");
	window.location.reload();
}
