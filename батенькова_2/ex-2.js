fetch('http://25.15.157.59:7153')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))