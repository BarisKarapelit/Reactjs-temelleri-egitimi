const personel =[
    {id:1,isim:"aaa", soyisim:"bbb", memleket:"ccc"},
    {id:2,isim:"ddd", soyisim:"ggg", memleket:"rrr"},
    {id:3,isim:"eee", soyisim:"hhh", memleket:"sss"},
    {id:4,isim:"fff", soyisim:"yyy", memleket:"ooo"},

];
console.log("ForEach Metodu")
personel.forEach(kisi => console.log(`isim : ${kisi.isim}`)) // Alt+69 Bektik oluşuyor ForEach Metodu
console.log("Map Metodu")
const yeni=personel.map(item => item.memleket)
console.log(yeni)