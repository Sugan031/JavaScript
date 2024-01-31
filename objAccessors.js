const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
        return this.language = lang
    },
    // get lang() {
    //     return this.language;
    // }
    // lang(){
    //     return this.language;
    // }

    lang: function () {
        return this.language + val;
    }

}




person.lang = "en";
document.write(person.lang);

const sample_1 = {
    value :435
}

Object.defineProperty(sample_1, "property1", {
    value: 23,
    writable: true,      // Property value can be changed
    enumerable: true,   // Property can be enumerated
    configurable: true  // Property can be reconfigured
})

// sample_1.property1 = "77";

console.log(sample_1.property1);

console.log(sample_1.value);
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}






