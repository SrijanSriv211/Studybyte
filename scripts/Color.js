// Color is the main algorithm behind searching and giving results for query in Studybyte search engine.
function Color(Query, Links)
{
	var Rrv = RankResultValues(Query, Links); // This function will give some values, which will be used to rank results.
	var Cr = ColorRank(Rrv, Links); // This function will use the ranked values and assign them to the most relevant website.
	return Cr; // Return Cr.
}

// This function check the search query and title of all websites letter by letter.
// This will then assign some values to each letter of every website with each letter of the user search query.
function MatchingWords(s1, s2)
{
	var w1 = s1;
	var w2 = s2;
	var Rank = 0;

	const Chars = ["-", "|", "/", "·"];
	for (var Check = 0; Check < Chars.length; Check++)
	{
		if (w2.includes(Chars[Check])) w2 = w2.trim().split(Chars[Check]).join(" ");
	}

	w2 = w2.trim().split(" ")
	if (s1.includes(" "))
	{
		w1 = s1.trim().split(" ");
		for (var word1 = 0; word1 < w1.length; word1++)
		{
			for (var word2 = 0; word2 < w2.length; word2++)
			{
				if (s1.toLowerCase() == s2.toLowerCase()) Rank += 2;
				else if (w1[word1].toLowerCase() == w2[word2].toLowerCase() && w2.length == 1) Rank += 2;
				else if (w1[word1].toLowerCase() == w2[word2].toLowerCase()) Rank++;
			}
		}
	}

	else if (s1.includes(" ") == false)
	{
		w1 = s1.trim();
		for (var word2 = 0; word2 < w2.length; word2++)
		{
			if (s1.toLowerCase() == s2.toLowerCase()) Rank += 2;
			else if (w1.toLowerCase() == w2[word2].toLowerCase() && w2.length == 1) Rank += 2;
			else if (w1.toLowerCase() == w2[word2].toLowerCase()) Rank++;
		}
	}

	return Rank;
}

// This function will list all the values that were given by the Matching words function to an array.
function RankResultValues(Query, Links)
{
	var Rank_values = [];
	for (var Link = 0; Link < Links.length; Link++) { Rank_values.push(MatchingWords(Query, Links[Link])); }

	return Rank_values;
}

// This function will then merge all the values with their respected websites and return a Merged list.
function ColorRank(Values, Results)
{
	var MergedList = [];
	for (var i = 0; i < Values.length; i++) { MergedList.push([Values[i], Results[i]]); }

	MergedList.sort().reverse();
	return MergedList;
}

// This function will help render website to the results page.
function ColorRender(ResultLinks)
{
	var RRL = document.getElementById("RankedResultList");
	RRL.appendChild(ResultLinks); // This will render those websites which will get passed to it.
}

// This funtion will peform basic calculations based on your input.
function ColorCalc(Operation)
{
	let FormatInput = Operation.trim().split(" "); // Remove all the white-spaces from the input.

	// Remove all empty-strings from FormatInput list.
	FormatInput = FormatInput.filter(function(element) {
		return element != "";
	});

	let Calculate = parseFloat(FormatInput[0]); // Set Calculate value to either 0 or the current result of last calculation.

	// This For Loop will peform all the calculations based on the given input.
	for (var i = 0; i < FormatInput.length; i+=2)
	{
		switch (FormatInput[i+1]) // All the calculations are getting performed here.
		{
			case "+":
				Calculate += parseFloat(FormatInput[i+2]);
				FormatInput[i] = Calculate;
				break;

			case "-":
				Calculate -= parseFloat(FormatInput[i+2]);
				FormatInput[i] = Calculate;
				break;

			case "*":
				Calculate *= parseFloat(FormatInput[i+2]);
				FormatInput[i] = Calculate;
				break;

			case "/":
				Calculate /= parseFloat(FormatInput[i+2]);
				FormatInput[i] = Calculate;
				break;

			default: break; // If no case matches then just break.
		}
	}

	return Calculate; // Return result.
}
