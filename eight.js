const countDown = (data)=>{
    const eventDate = new Date(data);
    const currentDate = new Date();
    const difference = eventDate-currentDate;

    return Math.ceil(difference/(1000*60*60*24));
}

let data = "2023-09-30";
console.log(countDown(data));