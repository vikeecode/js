     const name="vikas"
     const repoCount=39

    //  console.log(name + repoCount + "value");this is not a modern way to write a string syntax
    console.log(`this is my is${name} and my repocount${repoCount}`);//this is the modern way to write this is called string interpollition
    //another way to declare a string
    const gameName = new String(`vishal-hc`)
    console.log(gameName[0]);
    console.log(gameName.__proto__);



    console.log(gameName.length);//to check string length
    console.log(gameName.toUpperCase());//to write prototype
    console.log(gameName.charAt(3));
    console.log(gameName.indexOf(`s`));//to check konsa number hai 


    const newString = gameName.substring(0,4)//in substring if you give a negative value than it react a normal number
    console.log(newString);

    const anotherString = gameName.slice(-8,4) //in slice you can use negfative value
     console.log(anotherString);

     //trim or replace method
     //trim example

     const newStringOne ="   vikas   "
     console.log(newStringOne);
     console.log(newStringOne.trim());//if you use a trrim than space is ignore by trim

     //replace example
       
     const url ="https://vikas.com/hitesh%20choudhary"
     console.log(url.replace(`%20`,`-`))

     //include example

     console.log(url.includes(`vikas`));//to check value present or not


     //split
     console.log(gameName.split(`-`));




    