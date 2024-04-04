// შექმენით ობიექტი თქვენს თავზე - დაამატეთ სახელი, გვარი, ასაკი, საცხოვრებელი ადგილი და სკოლა. ბოლოს თითოეული დაბეჭდეთ კონსოლში.
let personalInfo = {
    name: "Giorgi",
    surname: "Gelashvili",
    age: 13,
    city: "Kutaisi",
    school: "Niko Nikoladzis Saxelobis Skola - NNS"
};

// შექმენით ობიექტები თქვენი ოჯახის წევრების შესახებ, თითოეულს უნდა ქონდეს სახელის, გვარის და ასაკის კუთვნილებები. ყველა მათგანი დაბეჭდეთ კონსოლში.
const familyInfo = {
    dadsName: "Levani",
    dadsSurname: "Gelashvili",
    dadsAge: 41,
    momsName: "Natia",
    momsSurname: "Uglava",
    momsAge: 41,
};
console.log(familyInfo.dadsName);
console.log(familyInfo.dadsSurname);
console.log(familyInfo.dadsAge);
console.log(familyInfo.momsName);
console.log(familyInfo.momsSurname);
console.log(familyInfo.momsAge);

// მიწვდით პირველი დავალების ობიექტის ყველა კუთვნილებას და შეუცვალეთ მათ მნიშვნელობები. უკვე შეცვლილები კი დაბეჭდეთ კონსოლში.
personalInfo.name = "Gela (Nickname)";
personalInfo.surname = "Idk";
personalInfo.age = 99;
personalInfo.city = "Tbilisi";
personalInfo.school = "Idk";

// შექმენით ორი იდენტური ობიექტი, რომლებსაც სახელების გარდა ყველა კუთვნილება და მათი მნიშვნელობები ექნებათ ერთი და იგივე. საბოლოოდ შეადარეთ ეს ორი ობიექტი == ოპერატორით.
const objectOne = {
    numKeyValue: 5
};
const objectTwo = {
    numKeyValue: 10
};
console.log(objectOne.numKeyValue == objectTwo.numKeyValue);

// აირჩეთ ერთი კონკრეტული ადგილი და შექმენით ამინდის პროგნოზის ობიექტი მისთვის. ამ ობიექტში უნდა გქონდეთ ლოკაცია, ტემპერატურა, დროის ხანგრძლივობა,
// ასევე ზოგადად როგორი ამინდი და პირობები იქნება. ყველა მათგანი კი ბოლოს კონსოლში დაბეჭდეთ.
const weatherProgramContent = {
    location: "Borjomi",
    weather: "Windy Day",
    temperature: 10,
    timingLength: (6).toString() + " Hours MIN"
}
console.log("In " + weatherProgramContent.location);
console.log("It will be a " + weatherProgramContent.weather);
console.log("It will be " + (weatherProgramContent.temperature).toString() + "Celcius Degrees");
console.log("It will last " + weatherProgramContent.timingLength);