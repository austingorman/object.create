// practice
const previousJob1 = Object.create({}, {
    business: {
        enumerable: true,
        writable: true,
        value: "McDonalds"
    },
    employmentStart: {
        enumerable: true,
        writable: true,
        value: "01-01-2003"
    },
    employmentEnd: {
        enumerable: true,
        writable: true,
        value: "05-19-2006"
    },
    thingsILiked: {
        enumerable: true,
        writable: true,
        value: "Flexible first job."
    },
    thingsIHated: {
        enumerable: true,
        writable: true,
        value: "I always smelled like french fries."
    }
})

const previousJob2 = Object.create({}, {
    business: {
        enumerable: true,
        writable: true,
        value: "Old Navy"
    },
    employmentStart: {
        enumerable: true,
        writable: true,
        value: "05-20-2010"
    },
    employmentEnd: {
        enumerable: true,
        writable: true,
        value: "03-22-2012"
    },
    thingsILiked: {
        enumerable: true,
        writable: true,
        value: "I met my wife there and shes pretty cool."
    },
    thingsIHated: {
        enumerable: true,
        writable: true,
        value: "Moms freaking out over $1 flip flops."
    }
})

const previousJob3 = Object.create({}, {
    business: {
        enumerable: true,
        writable: true,
        value: "Fastsigns"
    },
    employmentStart: {
        enumerable: true,
        writable: true,
        value: "03-23-2012"
    },
    employmentEnd: {
        enumerable: true,
        writable: true,
        value: "05-18-2018"
    },
    thingsILiked: {
        enumerable: true,
        writable: true,
        value: "Laid back for most of the time. Consistent hours."
    },
    thingsIHated: {
        enumerable: true,
        writable: true,
        value: "Not many opportunities to make something worthy of storing in my portfolio."
    }
})

// challenge
let JobMaker = (jobNumber, theBusiness, employmentStartDate, employmentEndDate, theThingsILiked, theThingsIHated) => {
    const jobThing = Object.create({}, {
        businessName: {
            enumerable: true,
            writable: true,
            value: theBusiness
        },
        employmentStartDate: {
            enumerable: true,
            writable: true,
            value: employmentStartDate
        },
        employmentEndDate: {
            enumerable: true,
            writable: true,
            value: employmentEndDate
        },
        thingsILiked: {
            enumerable: true,
            writable: true,
            value: theThingsILiked
        },
        thingsIHated: {
            enumerable: true,
            writable: true,
            value: theThingsIHated
        }
    })
    return jobThing
}
let theJobMaker = JobMaker('job1', 'HMBTE', '01-19-10', '2-2-12', 'Some cool dogs', 'The boss was an angry dog')
console.log(theJobMaker)

// advanced challenge

previousJobArray = [previousJob1, previousJob2, previousJob3]


for(let i = 0; i < previousJobArray.length; i++) {
    let jobArticle = document.createElement("article")
    jobArticle.setAttribute("id", previousJobArray[i].business)
    let divReference = document.querySelector("#content-container")
    divReference.appendChild(jobArticle)
}

