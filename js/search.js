var search_box = document.querySelector("#search_box");

var search_results = [
	{
        name: "Noodles",
        url: "www",
    },
    {
        name: "Cake",
        url: ""
    },
    {
        name: "Rice",
        url: ""
    },
    {
        name: "Pizza",
        url: ""
    },
    {
        name: "Choco Cake",
        url: ""
    },
    {
        name: "Shake",
        url: ""
    },
    {
        name: "Cake",
        url: ""
    },
    {
        name: "Kofi",
        url: ""
    },
];

search_box.addEventListener("keyup", (e)=>{
	search_suggestions_container.innerHTML = ``;

	search_results.forEach((search_result)=>{
		if(search_result["name"].toLowerCase().startsWith(search_box.value.toLowerCase().trim()) && search_box.value.toLowerCase().trim() !== ""){
			search_suggestions_container.innerHTML += `
				<a href="${search_result["url"]}">${search_result["name"]}</a>	
			`
		}
	});

	if(search_suggestions_container.innerHTML == ``){
		search_suggestions_container.style.border = `solid 0px black`;
	}else{
		search_suggestions_container.style.border = `solid 1px black`;
	}
})

var cancel_search = document.querySelector(".fa-xmark");

var search_suggestions_container = document.querySelector(".search_suggestions");

cancel_search.addEventListener("click", (e)=>{
	search_suggestions_container.style.border = `solid 0px black`;
	search_suggestions_container.innerHTML = ``;
	search_box.value = ``;
});

// Here is the maps stuff
// function createMap(){
//     var options = {
//         center:{ lat: 5.614818, lng: -0.205874 },
//         zoom: 16
//     };

//     map = new google.maps.Map(document.querySelector('.filter_section'), options);
// }
// createMap()