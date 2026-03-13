async function download(){

const url = document.getElementById("url").value

const result = document.getElementById("result")

result.innerHTML = "Processing..."

const res = await fetch("/api/download",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({url})
})

const data = await res.json()

if(data.success){

result.innerHTML =
`<a href="${data.download}" target="_blank">Download Video</a>`

}else{

result.innerHTML="Error downloading video"

}

}
