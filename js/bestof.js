fetch("json/review.json").then((data) => {
    // console.log(data)
    return data.json()
}).then((completeData) => {
    // console.log(completeData)
    let jadu = completeData
    // let postData = ""
    // console.log(jadu[1].tittle)
    // document.getElementById("copper") = jadu[1]
    // completeData.map((info) => {
    //     postData += `   <div class="recommend">
    //     <img src="${info.src}" alt="">
    //     <p>${info.tittle}</p>
    // </div>`;
    for (let i = 0; i < 1; i++) {
        // document.getElementsByClassName("copper").innerHTML = jadu[i].tittle
        document.getElementById("copper1").innerHTML = jadu[i].tittle
    }
    for (let i = 1; i < 2; i++) {
        // document.getElementsByClassName("copper").innerHTML = jadu[i].tittle
        document.getElementById("copper2").innerHTML = jadu[i].tittle
    }
    // })
    for (let i = 1; i < 3; i++) {
        // document.getElementsByClassName("copper").innerHTML = jadu[i].tittle
        document.getElementById("copper3").innerHTML = jadu[i].tittle
    }
    for (let i = 1; i < 4; i++) {
        // document.getElementsByClassName("copper").innerHTML = jadu[i].tittle
        document.getElementById("copper4").innerHTML = jadu[i].tittle
    }
}).catch((err) => { console.log(err) })

