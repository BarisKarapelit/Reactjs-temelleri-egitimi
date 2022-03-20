const personel =[
    {id:1,isim:"aaa", soyisim:"bbb", memleket:"ccc9999999999999999"},
    {id:2,isim:"ddd", soyisim:"ggg", memleket:"rrr555"},
    {id:3,isim:"eee", soyisim:"hhh", memleket:"sss"},
    {id:4,isim:"fff", soyisim:"yyy", memleket:"ooo"},

];
console.log("ForEach Metodu")
personel.forEach(kisi => console.log(`isim : ${kisi.isim}`)) // Alt+69 Bektik oluşuyor ForEach Metodu
console.log("Map Metodu")
const yeni=personel.map(item => item.memleket)
console.log(yeni)
console.log("Filtre Metod")

const filtrelenmis =personel.filter(item=>{
    return item.memleket.length>4
   
    })
console.log(filtrelenmis)