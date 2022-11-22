let gop = {
    name: "yoval",
    age:  20,
    country: "Israel",
    city: "TLV"
};

//give the value
for (let kog in gop) {
    console.log (gop[kog]);
}

for (let kog in gop) {
    console.log (gop[`${kog}`]);
}

//give the keys
for (let lod in gop) {
    console.log(lod)
};