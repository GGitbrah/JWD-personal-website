const person={
    firstName: 'firstName',
    lastName: 'lastName',
    'place of birth': 'place of birth',
    country: 'country'
    
};

    console.log(person, person['place of birth']);

     const school = {
        name: 'name',
        location: 'location',
        'established year': 'year',
        displayInfo: function(){
            console.log(`My school ${this.location} was established i`)

        }
     };
school.displayInfo();

