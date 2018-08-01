let name = "";

do {
	name = prompt("Please enter your name: ");
	}
while(!name); // if user accidently hits enter it will request for name again. 

func1 = () => {
	for (let i = 0, n = name.length; i < n; i++)
    {
		alert(name[i]);
	}
}

func1();
