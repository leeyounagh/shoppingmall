const continents =[
    {
        "_id":1,
        "name":"상의",

    },
    {
        "_id":2,
        "name":"하의",
        
    },
    {
        "_id":3,
        "name":"원피스",
        
    },
    {
        "_id":4,
        "name":"악세서리",
        
    },
    {
        "_id":5,
        "name":"소품",
        
    },
    {
        "_id":6,
        "name":"etc...",
        
    }
    
]

const price =[
    {
        "_id":0,
        "name":"Any",
        "array":[]
    },
    {
        "_id":1,
        "name":"0원~ 9999원",
        "array":[0,9999]
    },   {
        "_id":2,
        "name":"10000원~19999원",
        "array":[10000,19999]
    },
    {
        "_id":3,
        "name":"20000원~29999원",
        "array":[20000,29999]
    },
    {
        "_id":4,
        "name":"30000원~39999원",
        "array":[30000,39999]
    },
    {
        "_id":5,
        "name":"40000원 이상",
        "array":[40000,100000000000000]
    },
]


export {continents, price}