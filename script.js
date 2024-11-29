//your JS code here. If required.
let form = document.querySelector("form");
let name = document.querySelector("#name");
let age = document.querySelector("#age");
form.addEventListener("submit" (e)=> {
	e.preventDefault();
	if(name.value == "" || age.value == "") return ;
	let promise = new Promise((res, rej) => {
		setTimeout(() => {
			
			if(age.value >= 18){
				res(`Welcome, ${name.value}. You can vote.`)
			}else{
				rej(`Oh sorry ${name.value}. You aren't old enough`);
			}
		}, 4000)
	})
	promise
		.then((res) => {
			alert(res);
		})
		.catch((err) => {
			alert(err);
		})
})